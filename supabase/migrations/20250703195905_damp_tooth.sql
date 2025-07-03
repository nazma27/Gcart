-- Insert sample products
INSERT INTO public.products (name, description, price, image_url, category, rating, eco_score, carbon_saved, stock_quantity, is_featured) VALUES
('Bamboo Toothbrush Set', 'Sustainable bamboo toothbrushes with soft bristles - Pack of 4', 299, 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400', 'personal-care', 4.8, 95, 2.5, 100, true),
('Stainless Steel Water Bottle', 'Insulated stainless steel bottle with lifetime warranty - 750ml', 899, 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=400', 'lifestyle', 4.9, 92, 8.2, 50, true),
('Organic Cotton Tote Bag', 'Durable organic cotton bag for everyday use - GOTS certified', 449, 'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=400', 'lifestyle', 4.7, 88, 3.1, 75, false),
('Solar Power Bank', 'Portable solar-powered charging device - 20000mAh capacity', 2499, 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-159045.jpeg?auto=compress&cs=tinysrgb&w=400', 'electronics', 4.6, 90, 12.5, 30, true),
('Eco-Friendly Cleaning Kit', 'Natural cleaning products made from plant-based ingredients', 1299, 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400', 'home', 4.5, 94, 5.8, 40, false),
('Biodegradable Phone Case', 'Compostable phone case made from wheat straw - Multiple sizes', 799, 'https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=400', 'electronics', 4.4, 87, 1.9, 60, false),
('Reusable Food Wraps', 'Beeswax food wraps - Set of 5 different sizes', 599, 'https://images.pexels.com/photos/6621496/pexels-photo-6621496.jpeg?auto=compress&cs=tinysrgb&w=400', 'home', 4.6, 91, 4.2, 80, true),
('Organic Skincare Set', 'Complete organic skincare routine - Face wash, moisturizer & serum', 1899, 'https://images.pexels.com/photos/7262775/pexels-photo-7262775.jpeg?auto=compress&cs=tinysrgb&w=400', 'personal-care', 4.7, 93, 3.8, 25, true),
('Bamboo Cutlery Set', 'Portable bamboo cutlery set with carrying case', 349, 'https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg?auto=compress&cs=tinysrgb&w=400', 'lifestyle', 4.5, 89, 2.1, 90, false),
('LED Solar Garden Lights', 'Solar-powered LED garden lights - Set of 8 waterproof lights', 1599, 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400', 'home', 4.8, 96, 15.3, 20, true),
('Organic Cotton Bedsheet Set', 'GOTS certified organic cotton bedsheet set - King size', 2899, 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400', 'home', 4.6, 85, 6.7, 15, false),
('Natural Loofah Sponges', 'Natural loofah sponges for body exfoliation - Pack of 3', 199, 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=400', 'personal-care', 4.3, 92, 1.5, 120, false);

-- Insert sample achievements
INSERT INTO public.achievements (title, description, icon, badge_color, requirement_type, requirement_value, points_reward) VALUES
('Eco Warrior', 'Save 100kg of CO₂ through sustainable purchases', 'Leaf', 'from-green-400 to-emerald-500', 'carbon_saved', 100, 500),
('Sustainable Shopper', 'Make 25 eco-friendly purchases', 'ShoppingBag', 'from-yellow-400 to-orange-500', 'total_orders', 25, 300),
('Carbon Crusader', 'Reduce carbon footprint by 500kg', 'Target', 'from-blue-400 to-cyan-500', 'carbon_saved', 500, 1000),
('Green Influencer', 'Maintain a 30-day eco-shopping streak', 'Star', 'from-purple-400 to-pink-500', 'current_streak', 30, 750),
('Eco Pioneer', 'Try products from 10 different eco-categories', 'Zap', 'from-teal-400 to-green-500', 'categories_tried', 10, 400),
('Planet Protector', 'Save 1000kg of CO₂ through sustainable choices', 'Award', 'from-red-400 to-pink-500', 'carbon_saved', 1000, 2000),
('Consistency Champion', 'Complete 50 eco-goals', 'Trophy', 'from-indigo-400 to-purple-500', 'goals_completed', 50, 1500),
('Eco Enthusiast', 'Earn 5000 sustainability points', 'Heart', 'from-pink-400 to-rose-500', 'points_earned', 5000, 500);