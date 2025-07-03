import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingBag, Award, TrendingUp, Users, Globe } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-thin text-gray-800 dark:text-white mb-6">
            Welcome to the
            <span className="block bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Future of Shopping
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Join the sustainable revolution with GreenCart - where every purchase helps heal our planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Shopping
              </motion.button>
            </Link>
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 text-gray-800 dark:text-white rounded-full font-medium border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-300"
              >
                View Dashboard
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Leaf,
              title: 'Carbon Tracking',
              description: 'Monitor your environmental impact with every purchase',
              color: 'from-green-400 to-emerald-500'
            },
            {
              icon: Award,
              title: 'Eco Rewards',
              description: 'Earn points and unlock achievements for sustainable choices',
              color: 'from-teal-400 to-cyan-500'
            },
            {
              icon: ShoppingBag,
              title: 'Curated Products',
              description: 'Discover eco-friendly alternatives to everyday items',
              color: 'from-purple-400 to-pink-500'
            },
            {
              icon: TrendingUp,
              title: 'Impact Analytics',
              description: 'Visualize your positive environmental contributions',
              color: 'from-orange-400 to-red-500'
            },
            {
              icon: Users,
              title: 'Community',
              description: 'Connect with like-minded eco-conscious shoppers',
              color: 'from-blue-400 to-indigo-500'
            },
            {
              icon: Globe,
              title: 'Global Impact',
              description: 'Be part of a worldwide movement for sustainability',
              color: 'from-emerald-400 to-green-500'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-800 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <GlassCard className="p-12 text-center">
            <h2 className="text-4xl font-thin text-gray-800 dark:text-white mb-8">
              Our Global Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '2.5M+', label: 'CO₂ Saved (kg)' },
                { value: '150K+', label: 'Happy Customers' },
                { value: '50K+', label: 'Eco Products' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-thin bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300 font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};