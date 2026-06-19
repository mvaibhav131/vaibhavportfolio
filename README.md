# Vaibhav More — Portfolio

A modern, fully responsive developer portfolio built with **React 18 + TypeScript**.

Live: [vaibhavmore.in](http://vaibhavmore.in)

---

## Tech Stack

| Layer | Tech |
|---|---|
| UI | React 18, TypeScript, SCSS |
| Routing | React Router v6 |
| State | Zustand (theme persistence) |
| Styling | styled-components, CSS variables |
| Charts | Chart.js v4 + react-chartjs-2 v5 |
| Chatbot | react-chatbotify v2 |
| Contact | EmailJS + CallMeBot (WhatsApp) |
| Deploy | GitHub Pages via gh-pages |

---

## Sections

- About & Summary
- Skills & Tech Stack
- Work Experience
- Open Source Projects (GitHub API)
- Certifications
- Education
- Blogs
- Contact (with live form ? email + WhatsApp notification)

---

## Getting Started

### Prerequisites

- **Node.js 22+** (use `nvm` — `nvm install 22 && nvm use 22`)
- npm 10+

### Install & Run

```bash
git clone https://github.com/mvaibhav131/masterPortfolio.git
cd masterPortfolio
npm install --legacy-peer-deps
npm start
```

### Build

```bash
npm run build
```

### Test

```bash
npm test                  # run all tests
npm run test:coverage     # run with coverage report
```

### Deploy (GitHub Pages)

```bash
npm run deploy
```

---

## Configuration

### 1. Portfolio data

Edit `src/portfolio.js` — all personal info, experience, projects, certifications live here.

### 2. Theme

Edit `src/theme.js` — add or modify color themes. The toggle is in the footer.

### 3. Contact form (EmailJS + WhatsApp)

Create a `.env` file in the root:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# WhatsApp (optional — CallMeBot)
REACT_APP_CALLMEBOT_PHONE=91XXXXXXXXXX
REACT_APP_CALLMEBOT_APIKEY=your_apikey
```

**EmailJS setup:** [emailjs.com](https://emailjs.com) ? free 200 emails/month

**WhatsApp setup:** Send `I allow callmebot to send me messages` to +34 621 331 709 on WhatsApp to get your API key.

### 4. GitHub data

Run `node git_data_fetcher.mjs` to update GitHub stats cached in `src/shared/`.

---

## Project Structure

```
src/
+-- components/       # Reusable UI components (.tsx + .scss)
+-- containers/       # Feature sections (experience, skills, etc.)
+-- pages/            # Route-level pages (home, contact, education…)
+-- shared/           # Static JSON data (GitHub, contact)
+-- store/            # Zustand theme store
+-- portfolio.ts      # All personal portfolio data
+-- theme.ts          # Color theme definitions
+-- App.tsx           # Root component
```

Each component folder follows the pattern:
```
ComponentName/
+-- ComponentName.tsx
+-- ComponentName.scss
+-- ComponentName.types.ts
+-- ComponentName.test.tsx
+-- index.ts
```

---

## License

MIT
