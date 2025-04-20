'use client';

import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * Displays the content of a GitHub file.
 * @param {string} fileUrl - A GitHub URL in the form
 *   https://github.com/user/repo/blob/branch/path/to/file.ext
 */
const GitHubEmbed = ({ fileUrl }) => {
  const [code, setCode] = useState('');
  const [lang, setLang] = useState('text');

  useEffect(() => {
    if (!fileUrl) return;

    // Convert blob URL to raw URL
    const rawUrl = fileUrl
      .replace('https://github.com/', 'https://raw.githubusercontent.com/')
      .replace('/blob/', '/');

    // Determine language from file extension
    const ext = rawUrl.split('.').pop();
    const map = { js: 'javascript', jsx: 'jsx', ts: 'typescript', py: 'python', sol: 'solidity' };
    setLang(map[ext] || 'text');

    // Fetch the file contents
    fetch(rawUrl)
      .then(res => res.text())
      .then(setCode)
      .catch(error => console.error('Error loading GitHub file:', error));
  }, [fileUrl]);

  return (
    <div className="max-h-96 overflow-y-auto rounded-lg shadow-lg">
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        customStyle={{ margin: 0, padding: '1rem', fontSize: '0.9rem' }}
        wrapLongLines
        showLineNumbers
      >
        {code || '// Loading…'}
      </SyntaxHighlighter>
    </div>
  );
};

export default GitHubEmbed;