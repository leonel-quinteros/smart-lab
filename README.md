# Research Group Website

A simple static research group website ready for GitHub Pages.

## Included pages

- `index.html` — Homepage
- `people.html` — People and team members
- `research.html` — Research themes
- `publications.html` — Publications list
- `projects.html` — Project highlights
- `contact.html` — Contact details
- `css/styles.css` — Shared styling

## How to publish on GitHub Pages

1. Create a GitHub repository named `yourusername.github.io` or any repo name.
2. Initialize git in this folder:

   ```powershell
   git init
   git add .
   git commit -m "Initial research group website"
   git branch -M main
   git remote add origin https://github.com/<yourusername>/<repo>.git
   git push -u origin main
   ```

3. For a user or organization site, use repository name `yourusername.github.io`.
4. For a project site, enable GitHub Pages on branch `main` and use the root folder.

## Recommended next steps

- Replace placeholder text with your group name, PI, research topics, and publication links.
- Add your logo or group photo.
- If you want easier content editing later, consider switching to Quarto or Hugo.
- Use a custom domain or request a university subdomain for a more professional address.
