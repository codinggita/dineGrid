# DineGrid 🍽️

**DineGrid** is a premium, comprehensive restaurant management and reservation platform designed exclusively for high-end culinary experiences (currently themed for *The Spice House • Kalol*). It seamlessly bridges the gap between a stunning customer-facing interface and a powerful, modular administrative backend. 

Built with the "Titanium Luxury" & "Culinary Logic" design system, DineGrid ensures a visually stunning, smooth, and highly responsive experience across all devices.

---

## 🌐 Live Deployment
The application is live and unified under a single production link:
[**https://dine-grid.vercel.app**](https://dine-grid.vercel.app)

---

## 🎨 Figma Design Prototype
Explore the interactive high-fidelity design prototype that shaped DineGrid's user interface:
[**View Figma Prototype**](https://www.figma.com/proto/wODk5OYF7qmvW3zCsY2Fzr/Untitled?page-id=0%3A1&node-id=245-4&viewport=35468%2C-15250%2C0.35&t=lS5z9R7jmI5H7UyB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=51%3A13)

---

## 🎨 Design System — Culina Fresh

DineGrid uses the **Culina Fresh** design system — a token-based system ensuring visual consistency across every screen.

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
## ✨ Key Features

### 👨‍🍳 Customer Portal
*   **Premium Landing Experience:** Cinematic hero section, curated culinary collections, and VIP club integration.
*   **Dynamic Digital Menu ("Culina Fresh"):** High-quality visuals with categorized navigation (Mains, Starters, Breads, Biryanis).
*   **Seamless Booking Flow:** Step-by-step reservation system including Date/Time selection, Interactive Table picking, Guest Details, and secure Payment mockups.
*   **Authentication:** JWT-based Login and Registration.

### 🛡️ Admin Dashboard (Command Center)
*   **Live Queue Management:** Real-time waitlist tracking with notify/seat capabilities.
*   **Interactive Floor Plan:** Visual table management (Available, Occupied, Reserved, Cleaning) with capacity and current order previews.
*   **Reservations & Pre-Orders:** Comprehensive tables for managing bookings and active kitchen queues.
*   **Approvals:** Review interface for VIP requests, large parties, and special accommodations.
*   **Menu & Staff Management:** Interfaces to add/edit menu items and manage employee shifts and roles.
*   **Reports & Analytics:** Dashboard for tracking revenue trends, popular items, and daily covers.

---

## 🏗️ Folder Structure

The project is structured as a full-stack monorepo:

```text
dineGrid/
│
├── frontend/                 # React (Vite) Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── assets/           # Images, SVGs, and global styles
│   │   ├── components/       # Reusable UI components (Navbar, Footer, Modals)
│   │   ├── context/          # React Context providers (Auth, Booking)
│   │   ├── pages/            
│   │   │   ├── admin/        # All Admin Dashboard views
│   │   │   ├── auth/         # Login & Signup pages
│   │   │   ├── booking/      # Customer reservation flow
│   │   │   └── customer/     # Customer facing landing/menu pages
│   │   ├── utils/            # Helper functions
│   │   ├── App.jsx           # Main routing layer
│   │   └── index.css         # Tailwind & custom CSS variables
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/                  # Node.js / Express Backend API
│   ├── src/
│   │   ├── config/           # DB connection / environment configs
│   │   ├── controllers/      # Route logic (authController, etc.)
│   │   ├── models/           # Mongoose schemas (User, Booking, Menu)
│   │   └── routes/           # Express API endpoints
│   ├── .env                  # Environment variables
│   ├── index.js              # Server entry point
│   └── package.json
│
└── README.md
```

---

## 🚀 Tech Stack

### Frontend
*   **Framework:** React 19 + Vite
*   **Styling:** Tailwind CSS v4, Framer Motion (Animations)
*   **Icons:** Lucide React
*   **Routing:** React Router DOM

### Backend
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB via Mongoose
*   **Authentication:** JSON Web Tokens (JWT), bcryptjs
*   **Utilities:** CORS, dotenv

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/anshp2931-gif/dineGrid.git
cd dineGrid
```

### 2. Setup the Backend
Open a new terminal and run:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```
Start the backend server:
```bash
npm run dev  # or nodemon index.js
```

### 3. Setup the Frontend
Open a separate terminal and run:
```bash
cd frontend
npm install
```
Start the React development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

---
