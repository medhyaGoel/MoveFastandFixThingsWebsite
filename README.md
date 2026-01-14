# Move Fast & Fix Things

A modern website for POLISCI 33SI: Innovating for Effective Government - A deep dive into the past, present, and future of civic technology.

## Features

- **Home**: Landing page with course introduction and civic tech definition
- **Syllabus**: Course materials and slide presentations
- **Guest Speakers**: Talks and notes from 28 preeminent civic technologists
- **Opportunities**: Fellowships and pathways into GovTech
- **Blog**: Reflections from the course and curated GovTech news

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── components/
│   │   └── Navigation.tsx    # Navigation component
│   ├── blog/
│   │   └── page.tsx          # Blog page
│   ├── guest-speakers/
│   │   └── page.tsx          # Guest speakers page
│   ├── opportunities/
│   │   └── page.tsx          # Opportunities page
│   ├── syllabus/
│   │   └── page.tsx          # Syllabus page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

- Update content in each page component
- Modify colors in `tailwind.config.ts`
- Add more pages by creating new directories in `app/`
- Customize navigation in `app/components/Navigation.tsx`

## License

Student-led, non-partisan project for educational purposes.

