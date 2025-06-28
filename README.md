# Finovize - Personal Finance Dashboard

A modern, responsive finance dashboard built with Next.js, TypeScript, and Tailwind CSS.

![Finovize Dashboard](https://via.placeholder.com/1200x600/1c1e53/ffffff?text=Finovize+Dashboard)

## ✨ Features

- **📊 Interactive Dashboard**: Real-time view of financial metrics and balances
- **💳 Card Management**: Visual credit/debit card interface with add/remove functionality
- **🎯 Goal Planning**: Progress tracking for financial goals like car purchases, education
- **📈 Spending Analytics**: Visual charts and categorized expense tracking
- **💰 Transaction History**: Detailed payment history with merchant information and categories
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🎨 Modern UI**: Clean, professional interface with smooth animations
- **⚡ Fast Performance**: Built with Next.js 14 for optimal speed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel Ready

## 🎨 Design System

### Color Palette
- **Primary**: Dark Navy (`#1c1e53`)
- **Secondary**: Soft Lavender (`#f4f3fc`)
- **Accent**: Light Green (`#00c48c`)
- **Light Blue**: `#e0f2fe`
- **Dark Blue**: `#0f172a`

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/santoshnaya/finovize-finance-dashboard.git
cd finovize-finance-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌟 Component Architecture

### Main Components
- **Dashboard**: Main layout component
- **Sidebar**: Navigation with icons and active states
- **TopSummary**: Financial metrics overview
- **CardsSection**: Digital card management
- **PlanningSection**: Goal tracking with progress bars
- **InsightsPanel**: Charts and transaction history
- **WelcomeModal**: Introduction modal

### Interactive Features
- ✅ Hover effects on all interactive elements
- ✅ Smooth transitions and animations
- ✅ Responsive tab navigation
- ✅ Dynamic card addition/removal
- ✅ Interactive charts and data visualization
- ✅ Real-time progress indicators

## 📁 Project Structure

```
finovize-finance-dashboard/
├── app/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TopSummary.tsx
│   │   ├── CardsSection.tsx
│   │   ├── PlanningSection.tsx
│   │   ├── InsightsPanel.tsx
│   │   └── WelcomeModal.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 Key Features Implemented

### 1. Sidebar Navigation
- Interactive menu with icons
- Active/hover states
- User profile section
- Clean, professional layout

### 2. Financial Overview
- Total balance display
- Income/expense tracking
- Credit limit information
- Monthly savings metrics

### 3. Card Management
- Digital card visualization
- Add new cards functionality
- Card details display
- Responsive grid layout

### 4. Goal Planning
- Visual progress bars
- Goal tracking (car, college, etc.)
- Progress percentages
- Interactive elements

### 5. Analytics Panel
- Tab-based navigation (Today/Week/Month)
- Bar charts for spending categories
- Transaction history
- Payment categorization
- Test mode indicator

## 📱 Responsive Design

The dashboard is fully responsive and adapts to different screen sizes:
- **Desktop**: Full layout with sidebar and panels
- **Tablet**: Optimized grid layouts
- **Mobile**: Stacked components and touch-friendly interface

## 🚀 Deployment

This application is configured for easy deployment on Vercel:

1. **Connect to Vercel**
```bash
vercel
```

2. **Environment Variables** (if needed)
No environment variables required for the static version.

3. **Build Settings**
- Build Command: `npm run build`
- Output Directory: `out`

## 🔧 Configuration

### Next.js Configuration
- Static export enabled
- Image optimization disabled for static hosting
- Trailing slashes enabled

### Tailwind Configuration
- Custom color palette
- Inter font family
- Responsive breakpoints

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues & Support

If you encounter any issues or have questions, please create an issue on the GitHub repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**