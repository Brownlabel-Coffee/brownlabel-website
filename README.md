# Brown Label Coffee — Official Web Platform

Artisanal South Indian Filter Coffee & Roastery Web Platform. Built with React 18, Vite, Tailwind CSS, Three.js 3D Coffee Visualizations, and Direct WhatsApp Order Dispatch.

---

## 🛠️ Tech Stack
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://r3f.docs.pmnd.rs/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom luxury editorial tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Production Server**: [serve](https://www.npmjs.com/package/serve) (Railway / Container ready)

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or 20+ recommended)
- npm

### Installation
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Production Build & Testing
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview

# Or test Railway production server locally
npm start
```

---

## ☁️ Deployment on Railway

1. **Push to GitHub**: Ensure this repository is pushed to your GitHub account (`Brownlabel-Coffee/brownlabel-website`).
2. **Connect to Railway**:
   - Go to [railway.app](https://railway.app) and create a **New Project**.
   - Select **Deploy from GitHub repo** and choose `brownlabel-website`.
3. **Automatic Deployment**:
   - Railway auto-detects `package.json`, runs `npm run build`, and starts the production server using `npm start` (`serve -s dist -l $PORT`).
4. **Custom Domain (`brownlabelcoffee.com`)**:
   - In Railway Service **Settings** → **Networking** → **Custom Domains**, add `www.brownlabelcoffee.com`.
   - In your GoDaddy DNS manager, add a `CNAME` record for `www` pointing to the Railway target.
   - In GoDaddy Domain Forwarding, forward `brownlabelcoffee.com` to `https://www.brownlabelcoffee.com`.
   - Railway will automatically provision a free Let's Encrypt SSL/TLS certificate.

---

## 🔐 Roastery Admin Dashboard
- Append `#admin` to the website URL (e.g., `https://www.brownlabelcoffee.com/#admin`).
- Enter the master PIN: **`1984`** (Brown Label Coffee's founding year).
- Manage inquiries, live order history, catalog prices, and product availability.
