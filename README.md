# 🍽️ Dine Grid — Frontend

> **Skip the Wait. Reserve Your Table. Save on Midnight Meals.**
> A modern restaurant queue management and late-night dining platform — built with React.js

<br />

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🔗 Links

| | |
|---|---|
| 🌐 Live Demo | [dinegrid.vercel.app](#) |
| 🎥 Video Walkthrough | [Watch Demo](#) |
| 🗂️ Backend Repo | [dine-grid-backend](#) |
| 🎨 Figma Design | [Open Figma Prototype](https://www.figma.com/proto/wODk5OYF7qmvW3zCsY2Fzr/Untitled?page-id=0%3A1&node-id=245-4&viewport=35468%2C-15250%2C0.35&t=lS5z9R7jmI5H7UyB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=51%3A13) |
---

## 📌 About The Project

**Dine Grid** is a full-featured restaurant tech platform that eliminates physical waiting by giving diners a virtual queue experience and giving restaurant owners complete control over their floor in real time.

### The Problem It Solves
- Diners waste time standing in line with no visibility on wait time
- Restaurants lose revenue on empty tables during late-night hours
- Food goes to waste when last-minute bookings don't fill seats

### The Solution
- 📲 Join a virtual queue from anywhere — get notified when your table is ready
- 🌙 Claim discounted late-night rescue meals before they go to waste
- 🧑‍🍳 Restaurant owners manage capacity, queues, and deals from one dashboard

---

## 🎨 Design System — Culina Fresh

Dine Grid uses the **Culina Fresh** design system — a token-based system ensuring visual consistency across every screen.

### Color Palette

| Role | Token Name | Hex | Swatch |
|---|---|---|---|
| 🟢 Primary | `--color-primary` | `#4CAF50` | ![](https://placehold.co/80x18/4CAF50/4CAF50.png) |
| 🟠 Secondary | `--color-secondary` | `#FF9800` | ![](https://placehold.co/80x18/FF9800/FF9800.png) |
| 🩷 Tertiary | `--color-tertiary` | `#F26F9D` | ![](https://placehold.co/80x18/F26F9D/F26F9D.png) |
| ⚫ Neutral | `--color-neutral` | `#1A1C1C` | ![](https://placehold.co/80x18/1A1C1C/1A1C1C.png) |

### Typography Scale

| Level | Font | Weight | Usage |
|---|---|---|---|
| Headline | Inter | 700 — Bold | Page titles, hero sections, modal headers |
| Body | Inter | 400 — Regular | Descriptions, paragraphs, queue info |
| Label | Inter | 500 — Medium | Buttons, tags, input labels, badges |

### CSS Design Tokens

```css
:root {
  /* ── Brand Colors ── */
  --color-primary:       #4CAF50;  /* CTAs, active states, queue indicators */
  --color-primary-dark:  #388E3C;  /* Hover states for primary */
  --color-secondary:     #FF9800;  /* Deal badges, highlights, warnings */
  --color-tertiary:      #F26F9D;  /* Tags, icons, accent elements */
  --color-neutral:       #1A1C1C;  /* Dark backgrounds, base text */
  --color-neutral-light: #F5F5F5;  /* Card backgrounds, input fields */

  /* ── Typography ── */
  --font-family:         'Inter', sans-serif;
  --font-headline:       700;
  --font-body:           400;
  --font-label:          500;

  /* ── Button Variants ── */
  /* Primary   → bg: #4CAF50  | text: #FFFFFF */
  /* Secondary → bg: transparent | text: #1A1C1C */
  /* Inverted  → bg: #1A1C1C  | text: #FFFFFF */
  /* Outlined  → border: #1A1C1C | bg: transparent */
}
```

### UI Component Inventory

| Component | Variants | Token Used |
|---|---|---|
| `<Button />` | Primary, Secondary, Inverted, Outlined | `--color-primary`, `--color-neutral` |
| `<Badge />` | Deal, Live, Capacity, Position | `--color-secondary`, `--color-tertiary` |
| `<SearchBar />` | Default, Focused | `--color-neutral-light` |
| `<NavIcon />` | Home, Search, Profile | `--color-primary` |
| `<Divider />` | Green, Orange, Pink | All brand colors |
| `<Tag />` | Cuisine, Label | `--color-tertiary` |

---

## 🛠️ Tech Stack

| Category | Tool | Version | Purpose |
|---|---|---|---|
| Framework | React.js | 18.x | Core UI framework |
| Routing | React Router | v6 | Client-side page routing |
| Styling | Tailwind CSS | 3.x | Utility-first styling |
| HTTP Client | Axios | Latest | REST API calls to backend |
| Real-Time | Socket.io Client | Latest | Live queue position updates |
| State Management | Context API + useReducer | — | Auth & queue global state |
| Icons | Lucide React | Latest | Consistent icon set |
| Notifications | React Hot Toast | Latest | Queue alerts & confirmations |
| Deployment | Vercel | — | CI/CD + hosting |

---

## 📁 Project Structure

```bash
dine-grid-frontend/
│
├── public/
├── src/
│   ├── assets/
│   ├── styles/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📱 Pages & Routes

| Page | Route | User | Description |
|---|---|---|---|
| Home | `/` | All | Hero, feature highlights, CTA for diners and owners |
| Explore | `/explore` | Diner | Browse restaurants with filters: cuisine, distance, wait time, open now, late night |
| Restaurant Detail | `/restaurant/:id` | Diner | Full profile — menu, reviews, live queue status, late-night deals |
| Queue View | `/queue` | Diner | Live position tracker, countdown, pre-order cart, leave/notify actions |
| Deals | `/deals` | Diner | Late-night rescue listings with % off, portions left, closing timer |
| Dashboard | `/dashboard` | Owner | Capacity stats, live queue table, footfall chart, capacity controls |
| Login | `/login` | All | Email/password + Google OAuth sign in |
| Sign Up | `/signup` | All | Account creation for diners and restaurant owners |
| How It Works | `/how-it-works` | All | 3-step explainer for both user types |

---

## ✨ Feature Breakdown

### 👤 Diner Experience
| Feature | Description |
|---|---|
| 🔍 Restaurant Discovery | Browse 43+ live restaurants filtered by cuisine, distance, wait time, open status |
| 🟢 Live Queue Join | Add yourself to a virtual waitlist from anywhere — no physical waiting |
| 📍 Real-Time Position | See your exact spot (`#4 in line`) updating live via Socket.io |
| ⏱️ Accurate ETA | Dynamic wait estimate based on current capacity and queue pace |
| 🛒 Pre-Order While Waiting | Add drinks/appetizers to cart — prep starts when you reach `#1` |
| 🔔 Push Notification | Get alerted 5 minutes before your table is ready |
| 🌙 Late Night Rescue Deals | Claim premium meals at up to 75% off — limited portions, closes-in timers |
| 🗺️ Nearby & Fast | See restaurants under 5-minute wait highlighted on the explore screen |

### 🏪 Restaurant Owner Experience
| Feature | Description |
|---|---|
| 📊 Dashboard Overview | Capacity %, active queue count, revenue saved metric at a glance |
| 🪑 Live Queue Table | Party name, size, pre-order status — Seat Now or Notify with one tap |
| 🏗️ Capacity Controls | Set max seats per zone (Main Dining, Patio), toggle walk-in vs reservation ratio |
| 📈 Footfall Analytics | Hourly bar chart showing visitor traffic throughout the service window |
| 🌙 Midnight Mode | Activate late-night menus, flash deals, and VIP priority queuing after 10 PM |
| 💬 Pre-Order Visibility | See kitchen prep orders before the diner arrives to reduce turnaround time |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm `>= 9.x` or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/dine-grid-frontend.git
cd dine-grid-frontend

# 2. Install all dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in the values below

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## 🔐 Environment Variables

```env
# Backend API base URL
VITE_API_URL=http://localhost:5000

# Google OAuth Client ID
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id

# Socket.io server URL
VITE_SOCKET_URL=http://localhost:5000
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 🗺️ Roadmap

- [x] Restaurant listing with live filters
- [x] Virtual queue join & live position tracking
- [x] Pre-order flow (menu + cart while waiting)
- [x] Late-night rescue deals with countdown timers
- [x] Restaurant owner dashboard
- [x] Culina Fresh design system integration
- [ ] Real-time push notifications (Firebase FCM)
- [ ] Map view for nearby restaurants
- [ ] Loyalty & rewards system for repeat diners
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] React Native mobile app

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/your-feature`
3. Commit your changes — `git commit -m "feat: add your feature"`
4. Push to the branch — `git push origin feature/your-feature`
5. Open a Pull Request



```md
## 🎨 Figma Prototype

View the complete UI/UX prototype for **Dine Grid** here:

🔗 [Open Figma Prototype](https://www.figma.com/proto/wODk5OYF7qmvW3zCsY2Fzr/Untitled?node-id=214-145&viewport=35468%2C-15250%2C0.35&t=Cx7EC9NLGYd4OrWc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=214%3A145&show-proto-sidebar=1&page-id=0%3A1)

---
```

---


## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
[Portfolio](#) &nbsp;·&nbsp; [LinkedIn](#) &nbsp;·&nbsp; [GitHub](#)

---

> *"Good food shouldn't go to waste. Dine Grid connects the dots seamlessly."*