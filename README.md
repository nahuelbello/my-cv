# Nahuel Bello Portfolio

This is a personal portfolio and CV site built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS. It showcases my skills, experience, education, and provides contact links.

## Features

- **Home Section**: Hero banner with profile photo, name, role, and social/contact links.  
- **About Section**: A brief introduction and personal summary.  
- **Skills Section**: Highlighted technical skills alongside a LinkedIn badge.  
- **Experience Section**: Featured projects with live iframe preview and code snippets.  
- **Education Section**: Education details with logo and descriptive text.  
- **Contact Section**: Single-box layout with email CTA.  
- **Responsive Design**: Mobile-first and optimized for all screen sizes.  
- **Dark Mode Support**: Automatic color scheme based on user’s system preference.  
- **Custom Fonts**: Variable fonts via `next/font` (Instrument Sans, Plus Jakarta Sans, Geist, Geist Mono).  
- **Animations**: Smooth hover effects on headings, links, and images.

## Getting Started

### Prerequisites

- Node.js ≥ 18  
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nahuelbello/my-cv.git
   cd my-cv
   ```

2. Install dependencies:
   ```bash
   npm install

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app supports hot-reloading as you edit.

### Building for Production

```bash
npm run build
npm run start
```

### Deployment

You can deploy this site to [Vercel](https://vercel.com) with zero configuration:

1. Push your repo to GitHub.
2. Import the project in Vercel.

## Project Structure

```
my-cv/
├─ app/
│  ├─ layout.js        # Root layout (HTML, fonts, metadata)
│  ├─ page.js          # Home page composition
│  └─ ...
├─ src/
│  ├─ components/      # Reusable React components
│  ├─ styles/          # globals.css and Tailwind layers
│  └─ ...
├─ public/             # Static assets (images, logos)
├─ tailwind.config.js
├─ next.config.js
└─ README.md
```

## License

This project is open-source and available under the MIT License if you wanted to use it as a template :)
