# ✈️ Wanderlust Travel Agency — Single-Page React Web App

Wanderlust is a modern, responsive single-page web application designed for a travel agency. Rebuilt with **React**, **Vite**, and **Tailwind CSS**, it delivers a seamless user experience across mobile, tablet, and desktop devices.

---

## 🌟 Key Features

- **Componentized Architecture**: Clean separation into modular components (`Header`, `Hero`, `PackageGrid`, `GuestStepper`, `Testimonials`, `ContactCTA`, `Footer`).
- **Interactive Destination Filter**: Dynamic state-based filtering (`useState`) allowing users to filter tour packages by region (*All*, *Europe*, *Asia*).
- **Interactive Guest Stepper**: Reusable controlled component embedded within package cards to dynamically set traveler count.
- **Responsive Mobile Navigation**: Mobile drawer menu overlay featuring toggle (`☰`) and close (`✕`) buttons.
- **Hero Banner**: Full-width background image header with call-to-action messaging.
- **Lead Capture Form**: Interactive itinerary request form styled with dark-mode accents.

---

## 🛠️ Tech Stack

- **React 18** — Component-based UI library
- **Vite** — Fast, modern frontend build tool
- **Tailwind CSS v4** — Utility-first CSS framework
- **JavaScript (ES6+)** — Application logic and state management
- **Google Fonts** — [Poppins](https://fonts.google.com/specimen/Poppins) typography

---

## 📂 Project Structure

```text
TravelAgency/
├── public/
│   └── Images/             # Static image assets
│       ├── BackgeoundImage.avif
│       ├── Paris.avif
│       ├── Bali.avif
│       ├── Swiss.avif
│       ├── Sarah.avif
│       └── Micheal.avif
├── src/
│   ├── components/         # Modular React components
│   │   ├── ContactCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── GuestStepper.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── PackageGrid.jsx
│   │   └── Testimonials.jsx
│   ├── data/
│   │   └── packages.js     # Hardcoded tour & testimonial data
│   ├── App.jsx             # Main layout container
│   ├── index.css           # Tailwind CSS v4 setup
│   └── main.jsx            # Application entry point
├── index.html              # HTML entry point
├── vite.config.js          # Vite & Tailwind plugin configuration
└── package.json            # Dependencies and scripts
