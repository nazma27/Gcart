# GreenCart - Sustainable Shopping Platform

A futuristic, full-stack e-commerce platform focused on sustainable and eco-friendly products. Built with React, TypeScript, Supabase, and modern web technologies.

## 🌟 Features

### Frontend
- **Futuristic UI/UX**: Glassmorphism design with smooth animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Theme switching with persistent preferences
- **Interactive Animations**: Framer Motion for engaging user experience
- **State Management**: Zustand for efficient state handling

### Backend & Database
- **Supabase Integration**: Authentication, database, and real-time features
- **PostgreSQL Database**: Robust relational database with RLS
- **RESTful API**: Clean API design with TypeScript types
- **Authentication**: Secure user authentication with JWT tokens
- **Real-time Updates**: Live data synchronization

### Core Functionality
- **Product Catalog**: Eco-friendly products with sustainability metrics
- **Shopping Cart**: Persistent cart with carbon impact tracking
- **User Dashboard**: Personal sustainability metrics and progress
- **Goal Setting**: Custom eco-goals with progress tracking
- **Achievement System**: Gamified sustainability milestones
- **Order Management**: Complete order lifecycle tracking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd greencart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Copy your project URL and anon key
   - Create `.env` file from `.env.example`
   - Add your Supabase credentials

4. **Set up the database**
   - Run the SQL scripts in the `database/` folder:
     - First run `schema.sql` to create tables and policies
     - Then run `seed.sql` to populate with sample data

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Theme, Auth)
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (Supabase config)
├── pages/              # Page components
├── services/           # API service functions
├── store/              # Zustand state stores
└── types/              # TypeScript type definitions
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Query** - Data fetching
- **Zustand** - State management
- **React Hook Form** - Form handling

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Database
- **Row Level Security** - Data security
- **Real-time subscriptions** - Live updates

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing

## 🔐 Authentication & Security

- JWT-based authentication via Supabase Auth
- Row Level Security (RLS) policies for data protection
- Protected routes for authenticated users
- Secure API endpoints with proper authorization

## 📊 Database Schema

### Core Tables
- `user_profiles` - Extended user information and preferences
- `products` - Eco-friendly product catalog
- `orders` & `order_items` - Order management
- `goals` - User sustainability goals
- `achievements` & `user_achievements` - Gamification system

## 🎯 Key Features Explained

### Sustainability Tracking
- Carbon footprint calculation for each product
- Personal impact dashboard with visual metrics
- Monthly goals and progress tracking

### Gamification
- Achievement system with badges and points
- Streak tracking for consistent eco-shopping
- Leaderboards and social features (planned)

### Smart Recommendations
- AI-powered product suggestions (planned)
- Personalized eco-goals based on user behavior
- Impact-based product ranking

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy the dist/ folder
```

### Database Setup
- Supabase handles database hosting
- Run migration scripts in Supabase SQL editor
- Configure RLS policies for security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_NAME=GreenCart
VITE_APP_URL=http://localhost:5173
```

## 🔮 Future Enhancements

- [ ] AI-powered sustainability recommendations
- [ ] Social features and community challenges
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Integration with carbon offset providers
- [ ] Marketplace for eco-friendly brands
- [ ] Subscription box service
- [ ] AR product visualization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Supabase for the excellent backend platform
- Pexels for high-quality product images
- The open-source community for amazing tools and libraries