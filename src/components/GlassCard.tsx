import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      className={`
        backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 
        rounded-3xl border border-white/30 dark:border-gray-700/30 
        shadow-2xl shadow-black/10 dark:shadow-black/30
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};