import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, TrendingUp, Award, Calendar, Zap } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const DashboardPage: React.FC = () => {
  const carbonSaved = 245;
  const monthlyGoal = 300;
  const progress = (carbonSaved / monthlyGoal) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-thin text-gray-800 dark:text-white mb-2">
            Your Impact Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Track your sustainable journey and celebrate your achievements
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Carbon Impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light text-gray-800 dark:text-white">
                  Carbon Impact
                </h3>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-6 h-6 text-green-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">This Month</span>
                </div>
              </div>
              
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-gray-300 dark:text-gray-600"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - progress / 100) }}
                      transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-light text-gray-800 dark:text-white">
                        {carbonSaved}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        kg CO₂ saved
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-800 dark:text-white">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    of monthly goal
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-800 dark:text-white">
                    {monthlyGoal - carbonSaved}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    kg to go
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-light text-gray-800 dark:text-white">
                  12
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Goals Completed
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-orange-400" />
                <span className="text-2xl font-light text-gray-800 dark:text-white">
                  +15%
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Monthly Growth
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-light text-gray-800 dark:text-white">
                  8
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Achievements
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Recent Activities & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-light text-gray-800 dark:text-white mb-6">
                Recent Activities
              </h3>
              <div className="space-y-4">
                {[
                  { action: 'Purchased eco-friendly detergent', impact: '+5 kg CO₂', time: '2 hours ago' },
                  { action: 'Completed weekly eco-challenge', impact: '+10 points', time: '1 day ago' },
                  { action: 'Bought reusable water bottle', impact: '+3 kg CO₂', time: '3 days ago' },
                  { action: 'Shared sustainability tip', impact: '+2 points', time: '1 week ago' }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-center justify-between p-4 bg-white/10 dark:bg-gray-900/20 rounded-2xl"
                  >
                    <div>
                      <p className="text-gray-800 dark:text-white font-light">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {activity.time}
                      </p>
                    </div>
                    <div className="text-green-400 font-medium">
                      {activity.impact}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Current Goals */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-light text-gray-800 dark:text-white mb-6">
                Current Goals
              </h3>
              <div className="space-y-6">
                {[
                  { goal: 'Reduce plastic usage by 50%', progress: 75, icon: Leaf },
                  { goal: 'Try 5 new eco-brands', progress: 40, icon: Zap },
                  { goal: 'Share 3 sustainability tips', progress: 67, icon: Calendar }
                ].map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <goal.icon className="w-5 h-5 text-green-400" />
                      <span className="text-gray-800 dark:text-white font-light">
                        {goal.goal}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 dark:bg-gray-900/20 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-teal-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {goal.progress}% complete
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};