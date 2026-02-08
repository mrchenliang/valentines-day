# Valentine's Day App 💕

A romantic web app to ask someone special to be your Valentine!

## Features

- 🔐 Password protection with a personalized question
- 💖 Beautiful Valentine's Day question page
- 🎯 "No" button that moves when you hover over it (good luck clicking it!)
- 🌹 Success page with a beautiful flower GIF
- 📱 Fully responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your couple image:
   - Place your image in the `public` folder as `couple-image.jpg`
   - Or update the image path in `app/valentine/page.tsx`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Password

- Question: "Who is your favourite boyfriend?"
- Answer: "Chen" (case-insensitive)

## Pages

- `/` - Password entry page
- `/valentine` - Main question page with Yes/No buttons
- `/success` - Success page with flower GIF

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Deployment to GitHub Pages

1. **Initialize Git and create repository:**
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Create a new repository on GitHub** (don't initialize with README)

3. **Connect and push to GitHub:**
```bash
git remote add origin https://github.com/mrchenliang/valentines-day
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The GitHub Actions workflow will automatically deploy your site

5. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - If deploying to root domain, update `next.config.js` to remove `basePath` and `assetPrefix`

**Note:** If your repository name is not `valentines-day`, update the `basePath` and `assetPrefix` in `next.config.js` to match your repository name.
