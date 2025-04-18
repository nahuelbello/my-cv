'use client';

import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * Muestra el contenido de un archivo de GitHub.
 * @param {string} fileUrl - URL estilo
 *   https://github.com/user/repo/blob/branch/ruta/archivo.js
 */
const GitHubEmbed = ({ fileUrl }) => {
  const [code, setCode] = useState('');
  const [lang, setLang] = useState('text');

  useEffect(() => {
    if (!fileUrl) return;

    // 1) Pasamos de github.com/.../blob/ a raw.githubusercontent.com/...
    const rawUrl = fileUrl
      .replace('https://github.com/', 'https://raw.githubusercontent.com/')
      .replace('/blob/', '/');

    // 2) Deducimos lenguaje por la extensión
    const ext = rawUrl.split('.').pop();
    const map = { js: 'javascript', jsx: 'jsx', ts: 'typescript', py: 'python', sol: 'solidity' };
    setLang(map[ext] || 'text');

    // 3) Descargamos el archivo
    fetch(rawUrl)
      .then(res => res.text())
      .then(setCode)
      .catch(console.error);
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
        {code || '// Cargando…'}
      </SyntaxHighlighter>
    </div>
  );
};

export default GitHubEmbed;