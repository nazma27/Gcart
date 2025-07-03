import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target, Zap, Leaf } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const AchievementsPage: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'Eco Warrior',
      description: 'Saved 100kg of CO₂',
      icon: Leaf,
      earned: true,
      progress: 100,
      color: 'from-green-400 to-emerald-500',
      date: '2 weeks ago'
    },
    {
      id: 2,
      title: 'Sustainable Shopper',
      description: 'Made 25 eco-friendly purchases',
      icon: Trophy,
      earned: true,
      progress: 100,
      color: 'from-yellow-400 to-orange-500',
      date: '1 month ago'
    },
    {
      id: 3,
      title: 'Carbon Crusader',
      description: 'Reduce carbon footprint by 500kg',
      icon: Target,
      earned: false,
      progress: 65,
      color: 'from-blue-400 to-cyan-500',
      date: null
    },
    {
      id: 4,
      title: 'Green Influencer',
      description: 'Share 10 sustainability tips',
      icon: Star,
      earned: false,
      progress: 80,
      color: 'from-purple-400 to-pink-500',
      date: null
    },
    {
      id: 5,
      title: 'Eco Pioneer',
      description: 'Try 15 new eco-brands',
      icon: Zap,
      earned: false,
      progress: 40,
      color: 'from-teal-400 to-green-500',
      date: null
    },
    {
      id: 6,
      title: 'Planet Protector',
      description: 'Complete 50 eco-challenges',
      icon: Award,
      earned: false,
      progress: 22,
      color: 'from-red-400 to-pink-500',
      date: null
    }
  ];

  const stats = [
    { label: 'Total Achievements', value: '8', icon: Trophy },
    { label: 'Current Streak', value: '15', icon: Zap },
    { label: 'Points Earned', value: '2,450', icon: Star },
    { label: 'Rank', value: '#127', icon: Target }
  ];

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
            Your Achievements
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Celebrate your sustainable milestones and keep pushing forward
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
            >
              <GlassCard className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-light text-gray-800 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              <GlassCard className={`p-6 ${achievement.earned ? 'ring-2 ring-green-400/50' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center ${achievement.earned ? '' : 'opacity-50'}`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  {achievement.earned && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 300 }}
                      className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
                    >
                      <Award className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </div>

                <h3 className={`text-xl font-light mb-2 ${achievement.earned ? 'text-gray-800 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                  {achievement.title}
                </h3>
                
                <p className={`text-sm mb-4 ${achievement.earned ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}>
                  {achievement.description}
                </p>

                {achievement.earned ? (
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-medium text-sm">
                      Completed
                    </span>
                    <span className="text-gray-500 text-sm">
                      {achievement.date}
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Progress
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 dark:bg-gray-900/20 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${achievement.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${achievement.progress}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-thin text-gray-800 dark:text-white mb-8">
            Upcoming Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Zero Waste Week',
                description: 'Challenge yourself to produce zero waste for a week',
                reward: '500 points',
                duration: '7 days',
                difficulty: 'Hard'
              },
              {
                title: 'Local Shopping Spree',
                description: 'Buy only from local businesses for 2 weeks',
                reward: '300 points',
                duration: '14 days',
                difficulty: 'Medium'
              }
            ].map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              >
                <GlassCard className="p-6 border-2 border-dashed border-green-400/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-light text-gray-800 dark:text-white">
                      {challenge.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      challenge.difficulty === 'Hard' 
                        ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {challenge.difficulty}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {challenge.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Duration: {challenge.duration}
                      </div>
                      <div className="text-sm text-green-400 font-medium">
                        Reward: {challenge.reward}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Join Challenge
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};