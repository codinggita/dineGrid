# DineGrid 🍽️

**DineGrid** is a premium, comprehensive restaurant management and reservation platform designed exclusively for high-end culinary experiences. It seamlessly bridges the gap between a stunning customer-facing interface and a powerful, modular administrative backend.

Built with the "Titanium Luxury" & "Culina Fresh" design system, DineGrid ensures a visually stunning, smooth, and highly responsive experience across all devices.

---

## 🌐 Live Deployment
The application is live and unified under a single production link:
[**https://dine-grid.vercel.app**](https://dine-grid.vercel.app)

---

## 🎨 Figma Design Prototype
Explore the interactive high-fidelity design prototype that shaped DineGrid's user interface:
[**View Figma Prototype**](https://www.figma.com/proto/wODk5OYF7qmvW3zCsY2Fzr/Untitled?page-id=0%3A1&node-id=245-4&viewport=35468%2C-15250%2C0.35&t=lS5z9R7jmI5H7UyB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=51%3A13)

---

## ✨ Key Features

### 👨‍🍳 Customer Portal
*   **Premium Landing Experience:** Cinematic hero section, gated "Get Started" flow, and VIP club integration.
*   **Smart Authentication:** Gated booking system that redirects users back to their intended destination after login/signup.
*   **Dynamic Digital Menu:** High-quality visuals with categorized navigation for a seamless browsing experience.
*   **Interactive Booking:** Step-by-step reservation system including interactive table selection and guest details.

### 🛡️ Admin Command Center
*   **Full Mobile Responsiveness:** The entire admin dashboard is optimized for mobile, tablet, and desktop viewing.
*   **Staff Management:** Full CRUD operations for staff, including dynamic avatar generation and random profile color assignment.
*   **Menu Management:** Real-time table-based management of culinary items with mobile-friendly overflow support.
*   **Reports & Analytics:** Responsive data visualizations tracking daily covers, revenue trends, and popular items.
*   **Live Operations:** Modules for Live Queue, Tables Floor Plan, and Reservations management.

---

## 🚀 Tech Stack

### Frontend
*   **Framework:** React 19 + Vite
*   **Styling:** Tailwind CSS v4, Framer Motion (Animations)
*   **Icons:** Lucide React
*   **State Management:** React Context API (Auth & Booking)

### Backend
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB via Mongoose
*   **Deployment:** Vercel Serverless Functions

---

## 🏗️ Project Structure

```text
dineGrid/
├── frontend/           # React (Vite) Frontend Application
├── backend/            # Node.js / Express Backend API
├── vercel.json         # Unified Vercel deployment config
├── .gitignore          # Root ignore rules
└── README.md           # Project documentation
```

---

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/anshp2931-gif/dineGrid.git
cd dineGrid
```

### 2. Setup & Environment
Ensure you have `.env` files in both `frontend` and `backend` directories. Refer to the `.env.example` files provided in each folder for the required variables (`MONGO_URL`, `JWT_SECRET`, etc.).

### 3. Install & Run
**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 📄 License
This project is for demonstration and portfolio purposes.
