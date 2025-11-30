# Minimal Portfolio

A clean, modern, and SEO-optimized portfolio website built with React and Vite. Features a minimal design with dark/light theme support, dynamic SEO meta tags, structured data, and a responsive layout.

## Features

- 🎨 **Dark/Light Theme** - Smooth theme switching with persistent preference
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- 🔍 **SEO Optimized** - Dynamic meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- ⚡ **Fast Performance** - Built with Vite for optimal build times and HMR
- ♿ **Accessible** - Semantic HTML and ARIA labels for better accessibility
- 📄 **Sections**:
  - **About** - Coding journey and skills showcase
  - **Projects** - Portfolio of web applications with live links and GitHub repos
  - **Education** - Academic background and qualifications
  - **Blog** - Placeholder for blog posts
  - **Contact** - Contact information and social links

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom SEO Hook** - Dynamic meta tag management

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd minimal-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
minimal-portfolio/
├── public/
│   ├── robots.txt          # Search engine crawler directives
│   ├── sitemap.xml         # Sitemap for SEO
│   └── vite.svg            # Favicon
├── src/
│   ├── hooks/
│   │   └── useSEO.js       # Custom hook for SEO meta tags
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and theme
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## SEO Features

- **Dynamic Meta Tags** - Title, description, keywords, and author tags
- **Open Graph Tags** - For better social media sharing
- **Twitter Card Tags** - Optimized Twitter sharing
- **Structured Data (JSON-LD)** - Person and WebSite schemas for rich snippets
- **Canonical URLs** - Prevents duplicate content issues
- **robots.txt** - Search engine crawler instructions
- **sitemap.xml** - Site structure for search engines

## Customization

### Updating Personal Information

Edit the following in `src/App.jsx`:

- **SEO Configuration** (lines 16-25): Update title, description, keywords, and author
- **Structured Data** (lines 79-130): Update Person schema with your details
- **About Section** (lines 489-778): Update your coding journey and skills
- **Projects Array** (lines 200-280): Add or modify your projects
- **Education Section** (lines 936-1040): Update your educational background
- **Contact Section** (lines 1100-1197): Update contact information

### Theme Colors

The portfolio uses Tailwind CSS with a custom zinc color scheme for dark mode. To modify colors, edit:

- `src/index.css` - Background colors for html/body
- `src/App.jsx` - Replace `zinc-*` classes with your preferred color scheme

### Adding Blog Posts

The blog section is currently a placeholder. To add blog functionality:

1. Create a blog posts data structure
2. Update the blog section rendering logic
3. Optionally add routing for individual blog posts

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and not licensed for public use.

## Author

**Rohith Achar**

- Email: rohithachar2000@gmail.com
- GitHub: [@RohithAchar](https://github.com/RohithAchar)
- LinkedIn: [Rohith Achar](https://www.linkedin.com/in/rohith-achar-bbb189311/)

---

Built with ❤️ using React and Vite
