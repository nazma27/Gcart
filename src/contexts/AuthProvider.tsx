import React, { createContext, useContext, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useAuthStore } from '../store/authStore';
import { profileApi } from '../services/api';
import toast from 'react-hot-toast';

const AuthContext = createContext<ReturnType<typeof useAuth> | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();
  const { setUser, setProfile, setLoading } = useAuthStore();

  useEffect(() => {
    setUser(auth.user);
    setLoading(auth.loading);

    // Load user profile when user changes
    if (auth.user) {
      profileApi.get(auth.user.id)
        .then((profile) => {
          if (profile) {
            setProfile(profile);
          } else {
            // Create initial profile for new users
            profileApi.create({
              user_id: auth.user!.id,
              carbon_saved: 0,
              total_orders: 0,
              achievements_count: 0,
              current_streak: 0,
              points_earned: 0,
              monthly_goal: 300,
              preferences: {
                notifications: true,
                newsletter: true,
                theme: 'light',
              },
            }).then(setProfile).catch(console.error);
          }
        })
        .catch((error) => {
          console.error('Error loading profile:', error);
          toast.error('Failed to load profile');
        });
    } else {
      setProfile(null);
    }
  }, [auth.user, auth.loading, setUser, setProfile, setLoading]);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};