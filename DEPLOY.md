# Deployment Instructions

## Quick Deploy to GitHub Pages

### Step 1: Initialize Git
```bash
git init
git add .
git commit -m "Initial commit: Valentine's Day app"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `valentines-day`)
3. **Don't** initialize with README, .gitignore, or license

### Step 3: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically build and deploy your site

### Step 5: Configure Base Path (if needed)
If your repository name is NOT `valentines-day`, update `next.config.js`:

```javascript
basePath: '/YOUR_REPO_NAME',
assetPrefix: '/YOUR_REPO_NAME',
```

### Step 6: Access Your Site
Your site will be live at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

The GitHub Actions workflow will automatically rebuild and redeploy whenever you push changes to the `main` branch.
