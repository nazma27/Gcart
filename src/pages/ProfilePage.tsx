import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Bell, Shield, LogOut, Edit3, Camera } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const ProfilePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-thin text-gray-800 dark:text-white mb-2">
            Profile Settings
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Manage your account and preferences
          </p>
        </motion.div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-light">
                  JS
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <Camera className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-light text-gray-800 dark:text-white mb-2">
                  John Smith
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  john.smith@email.com
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-800 dark:text-white">
                      1,247
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      kg CO₂ saved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-800 dark:text-white">
                      28
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Orders
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-800 dark:text-white">
                      15
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Achievements
                    </div>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-2xl font-medium flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Settings */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-light text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
                <User className="w-5 h-5 text-green-400" />
                <span>Account Settings</span>
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Personal Information', description: 'Update your profile details' },
                  { label: 'Password & Security', description: 'Change your password and security settings' },
                  { label: 'Email Preferences', description: 'Manage your email notifications' },
                  { label: 'Privacy Settings', description: 'Control your privacy preferences' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white/10 dark:bg-gray-900/20 rounded-2xl cursor-pointer hover:bg-white/20 dark:hover:bg-gray-900/30 transition-colors"
                  >
                    <div className="font-light text-gray-800 dark:text-white">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Preferences */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-light text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
                <Settings className="w-5 h-5 text-green-400" />
                <span>Preferences</span>
              </h3>
              <div className="space-y-6">
                {[
                  { 
                    label: 'Notifications', 
                    description: 'Get updates about your eco-progress',
                    icon: Bell,
                    enabled: true
                  },
                  { 
                    label: 'Two-Factor Authentication', 
                    description: 'Add an extra layer of security',
                    icon: Shield,
                    enabled: false
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-center justify-between p-4 bg-white/10 dark:bg-gray-900/20 rounded-2xl"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="font-light text-gray-800 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        item.enabled 
                          ? 'bg-green-400' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <motion.div
                        className="w-5 h-5 bg-white rounded-full shadow-md"
                        animate={{
                          x: item.enabled ? 24 : 2,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8"
        >
          <GlassCard className="p-6">
            <h3 className="text-xl font-light text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
              <LogOut className="w-5 h-5 text-red-400" />
              <span>Account Actions</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Sign Out
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white/10 dark:bg-gray-900/20 text-red-400 rounded-2xl font-medium border border-red-400/30 hover:bg-red-400/10 transition-all duration-300"
              >
                Delete Account
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};