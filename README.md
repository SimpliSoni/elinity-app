# Elinity App

A multi-platform recruitment and hiring solution with separate web and mobile applications.

## Project Structure

```
elinity-app/
├── mobile/          # React Native (Expo) mobile application
│   ├── app/         # Expo Router screens
│   ├── components/  # Reusable mobile components
│   ├── assets/      # Mobile assets (images, fonts)
│   └── package.json # Mobile dependencies
│
├── web/             # React (Vite) web application
│   ├── components/  # Reusable web components
│   ├── hooks/       # Custom React hooks
│   ├── public/      # Static assets
│   └── package.json # Web dependencies
│
└── README.md        # This file
```

## Getting Started

### Mobile App (Expo)

```bash
cd mobile
npm install
npm start
```

**Available commands:**
- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run in web browser

### Web App (Vite)

```bash
cd web
npm install
npm run dev
```

**Available commands:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

### Mobile
- **Framework:** React Native with Expo SDK 54
- **Navigation:** Expo Router
- **Styling:** NativeWind (TailwindCSS)
- **Language:** TypeScript

### Web
- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** TailwindCSS
- **Language:** TypeScript

## Architecture Decisions

- **Separate Dependencies:** Mobile and web maintain independent `package.json` files to avoid cross-platform dependency conflicts
- **No Monorepo Tooling:** Each project is self-contained for simpler CI/CD and reduced complexity
- **Shared Design System:** Both platforms follow the same design language but with platform-appropriate implementations

## License

Private - All rights reserved
