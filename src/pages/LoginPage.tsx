import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { useAuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

export const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const { signIn, signUp } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(formData.email, formData.password);
        toast.success('Welcome back!');
        navigate('/dashboard');
      } else {
        await signUp(formData.email, formData.password, formData.fullName);
        toast.success('Account created successfully!');
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      toast.error(error.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center"
    >
      <div className="max-w-md w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <GlassCard className="p-8" hover={false}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-thin text-gray-800 dark:text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Join GreenCart'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                {isLogin ? 'Continue your sustainable journey' : 'Start your eco-friendly adventure'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500"
                    />
                  </div>
                </motion.div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{isLogin ? 'Signing In...' : 'Creating Account...'}</span>
                  </>
                ) : (
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                )}
              </motion.button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-600 dark:text-gray-300 font-light">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-white/5 dark:bg-gray-900/10 rounded-2xl border border-white/10 dark:border-gray-700/20">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">
                Demo Credentials (for testing):
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-500 text-center space-y-1">
                <div>Email: demo@greencart.com</div>
                <div>Password: demo123</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};