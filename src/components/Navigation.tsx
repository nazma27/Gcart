import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Home, ShoppingBag, User, Award, Sun, Moon, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuthStore } from '../store/authStore';
import { useAuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuthStore();
  const { signOut } = useAuthContext();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Failed to sign out');
    }
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/products', icon: ShoppingBag, label: 'Products' },
    ...(isAuthenticated ? [
      { path: '/dashboard', icon: Leaf, label: 'Dashboard' },
      { path: '/achievements', icon: Award, label: 'Achievements' },
      { path: '/profile', icon: User, label: 'Profile' },
    ] : []),
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 rounded-full px-8 py-4 border border-white/30 dark:border-gray-700/30 shadow-2xl">
        <div className="flex items-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-thin text-gray-800 dark:text-white">GreenCart</span>
          </motion.div>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-2 rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-green-500/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {isAuthenticated ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignOut}
                className="p-2 rounded-full bg-gradient-to-br from-red-400 to-pink-500 text-white shadow-lg"
              >
                <LogOut className="w-5 h-5" />
              </motion.button>
            ) : (
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-br from-green-400 to-teal-500 text-white shadow-lg text-sm font-medium"
                >
                  Sign In
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};