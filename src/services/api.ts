import { supabase } from '../lib/supabase';
import { Product, UserProfile, Goal, Order, UserAchievement } from '../lib/supabase';

// Products API
export const productsApi = {
  getAll: async (category?: string, search?: string): Promise<Product[]> => {
    let query = supabase.from('products').select('*');
    
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }
    
    if (search) {
      query = query.ilike('name', `%${search}%`);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  getById: async (id: string): Promise<Product | null> => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  getFeatured: async (): Promise<Product[]> => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_featured', true)
      .limit(6);
    
    if (error) throw error;
    return data || [];
  },
};

// User Profile API
export const profileApi = {
  get: async (userId: string): Promise<UserProfile | null> => {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  create: async (profile: Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>): Promise<UserProfile> => {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert(profile)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (userId: string, updates: Partial<UserProfile>): Promise<UserProfile> => {
    const { data, error } = await supabase
      .from('user_profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
};

// Goals API
export const goalsApi = {
  getUserGoals: async (userId: string): Promise<Goal[]> => {
    const { data, error } = await supabase
      .from('goals')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  create: async (goal: Omit<Goal, 'id' | 'created_at' | 'updated_at'>): Promise<Goal> => {
    const { data, error } = await supabase
      .from('goals')
      .insert(goal)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, updates: Partial<Goal>): Promise<Goal> => {
    const { data, error } = await supabase
      .from('goals')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('goals')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Orders API
export const ordersApi = {
  create: async (order: Omit<Order, 'id' | 'created_at' | 'updated_at'>): Promise<Order> => {
    const { data, error } = await supabase
      .from('orders')
      .insert(order)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  getUserOrders: async (userId: string): Promise<Order[]> => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },
};

// Achievements API
export const achievementsApi = {
  getUserAchievements: async (userId: string): Promise<UserAchievement[]> => {
    const { data, error } = await supabase
      .from('user_achievements')
      .select(`
        *,
        achievement:achievements(*)
      `)
      .eq('user_id', userId)
      .order('earned_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  checkAndAwardAchievements: async (userId: string): Promise<void> => {
    // This would contain logic to check user progress and award new achievements
    // For now, it's a placeholder for the achievement system
  },
};