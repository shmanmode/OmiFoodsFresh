# OmiFoods Website

A lightweight website for Omifoods showcasing their premium food products with a responsive design.

## Features

- 🥟 Product showcase with categories (Momos, Spring Rolls, Burger Patty, Soya Chap, etc.)
- 📱 Fully responsive design for mobile, tablet, and desktop
- 📝 Contact form with Google Sheets integration to collect customer inquiries
- 🔍 Product filtering by categories
- 💬 Customer testimonials section

## Tech Stack

- Frontend: React, TypeScript, Tailwind CSS, shadcn/ui components
- Backend: Express server with in-memory storage
- Integration: Google Sheets API for contact form submissions

## Deployment Instructions

### GitHub Pages Setup

1. Push the code to your GitHub repository
2. Set up the following secrets in your GitHub repository settings:
   - `SHEET_ID`: Your Google Sheets ID for form submissions
   - `GOOGLE_CREDENTIALS`: Your Google API credentials JSON (as a string)
3. The GitHub Action will automatically build and deploy to GitHub Pages on push to main

### Deployment with GitHub Pages

The website is set up to deploy automatically to GitHub Pages using GitHub Actions. The workflow file `.github/workflows/deploy.yml` handles the build and deployment process.

#### Custom Domain Setup (Optional)

1. Purchase your domain (if you don't already have one)
2. Go to your GitHub repository Settings > Pages
3. Under "Custom domain", enter your domain name (e.g., omifoods.in)
4. Update your domain's DNS settings to point to GitHub Pages:
   - Type: A records
   - Host: @
   - Value: GitHub Pages IP addresses (provided in GitHub Pages documentation)
5. Wait for DNS propagation (may take up to 48 hours)

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will be available at [http://localhost:5000](http://localhost:5000)

## Build

To build the project for production:

```bash
npm run build
```

## Contact

For inquiries, please contact us at info@omifoods.in

---

Fresh Forever, Make it the way you like it!