import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Leaf, ShoppingCart, Heart } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Bamboo Toothbrush Set',
      price: 299,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'personal-care',
      rating: 4.8,
      ecoScore: 95,
      carbonSaved: 2.5,
      description: 'Sustainable bamboo toothbrushes with soft bristles - Pack of 4'
    },
    {
      id: 2,
      name: 'Stainless Steel Water Bottle',
      price: 899,
      image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'lifestyle',
      rating: 4.9,
      ecoScore: 92,
      carbonSaved: 8.2,
      description: 'Insulated stainless steel bottle with lifetime warranty - 750ml'
    },
    {
      id: 3,
      name: 'Organic Cotton Tote Bag',
      price: 449,
      image: 'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'lifestyle',
      rating: 4.7,
      ecoScore: 88,
      carbonSaved: 3.1,
      description: 'Durable organic cotton bag for everyday use - GOTS certified'
    },
    {
      id: 4,
      name: 'Solar Power Bank',
      price: 2499,
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-159045.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'electronics',
      rating: 4.6,
      ecoScore: 90,
      carbonSaved: 12.5,
      description: 'Portable solar-powered charging device - 20000mAh capacity'
    },
    {
      id: 5,
      name: 'Eco-Friendly Cleaning Kit',
      price: 1299,
      image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'home',
      rating: 4.5,
      ecoScore: 94,
      carbonSaved: 5.8,
      description: 'Natural cleaning products made from plant-based ingredients'
    },
    {
      id: 6,
      name: 'Biodegradable Phone Case',
      price: 799,
      image: 'https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'electronics',
      rating: 4.4,
      ecoScore: 87,
      carbonSaved: 1.9,
      description: 'Compostable phone case made from wheat straw - Multiple sizes'
    },
    {
      id: 7,
      name: 'Reusable Food Wraps',
      price: 599,
      image: 'https://images.pexels.com/photos/6621496/pexels-photo-6621496.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'home',
      rating: 4.6,
      ecoScore: 91,
      carbonSaved: 4.2,
      description: 'Beeswax food wraps - Set of 5 different sizes'
    },
    {
      id: 8,
      name: 'Organic Skincare Set',
      price: 1899,
      image: 'https://images.pexels.com/photos/7262775/pexels-photo-7262775.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'personal-care',
      rating: 4.7,
      ecoScore: 93,
      carbonSaved: 3.8,
      description: 'Complete organic skincare routine - Face wash, moisturizer & serum'
    },
    {
      id: 9,
      name: 'Bamboo Cutlery Set',
      price: 349,
      image: 'https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'lifestyle',
      rating: 4.5,
      ecoScore: 89,
      carbonSaved: 2.1,
      description: 'Portable bamboo cutlery set with carrying case'
    },
    {
      id: 10,
      name: 'LED Solar Garden Lights',
      price: 1599,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'home',
      rating: 4.8,
      ecoScore: 96,
      carbonSaved: 15.3,
      description: 'Solar-powered LED garden lights - Set of 8 waterproof lights'
    },
    {
      id: 11,
      name: 'Organic Cotton Bedsheet Set',
      price: 2899,
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'home',
      rating: 4.6,
      ecoScore: 85,
      carbonSaved: 6.7,
      description: 'GOTS certified organic cotton bedsheet set - King size'
    },
    {
      id: 12,
      name: 'Natural Loofah Sponges',
      price: 199,
      image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'personal-care',
      rating: 4.3,
      ecoScore: 92,
      carbonSaved: 1.5,
      description: 'Natural loofah sponges for body exfoliation - Pack of 3'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'personal-care', name: 'Personal Care' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'home', name: 'Home' },
    { id: 'electronics', name: 'Electronics' }
  ];

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            Eco-Friendly Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Discover sustainable alternatives for a greener lifestyle
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-800 dark:text-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-white dark:bg-gray-800">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Heart button - top right */}
                  <div className="absolute top-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Eco Score Badge - centered at bottom of image */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.05, type: 'spring', stiffness: 200 }}
                      className="px-3 py-1.5 bg-green-500/90 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg border border-white/20"
                    >
                      <div className="flex items-center space-x-1">
                        <Leaf className="w-3 h-3" />
                        <span>{product.ecoScore}% Eco</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-light text-gray-800 dark:text-white">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Leaf className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {product.carbonSaved}kg CO₂ saved
                      </span>
                    </div>
                    <div className="text-2xl font-light text-gray-800 dark:text-white">
                      ₹{product.price}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-2xl font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center py-16"
          >
            <GlassCard className="p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-800 dark:text-white mb-4">
                No products found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Try adjusting your search or filter criteria
              </p>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};