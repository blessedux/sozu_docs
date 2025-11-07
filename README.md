# Sozu Capital Documentation

Technical documentation for Sozu Capital's financial tools - docs.sozu.capital

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The documentation site will be running at `http://localhost:3000`

## 🎯 Features

- ✨ **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design
- 🌍 **Internationalization** - Multi-language support (English, Spanish, French)
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and brand customization
- ⚡ **Fast** - Optimized for performance with Next.js 15
- 🔧 **TypeScript** - Full TypeScript support

## 📁 Project Structure

```
sozu_docs/
├── app/                    # Next.js app directory
│   ├── [locale]/           # Internationalized routes
│   │   ├── concepts/       # Documentation pages
│   │   └── page.tsx        # Homepage
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── docs-sidebar.tsx   # Documentation sidebar
│   ├── site-header.tsx    # Site header
│   └── ui/                # UI components
├── content/               # Markdown content
│   ├── en/                # English content
│   ├── es/                # Spanish content
│   └── fr/                # French content
├── lib/                   # Utility functions
├── messages/              # i18n messages
└── public/               # Static assets
```

## ⚡ Built with

- [Next.js 15](https://nextjs.org) - The React framework
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📖 Development

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## 📄 License

Published under the [MIT](LICENSE) license.
