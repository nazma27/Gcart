# 🚀 Supabase Setup Guide for GreenCart

Follow these steps to connect your GreenCart application to Supabase and get your full-stack app running.

## Step 1: Create Supabase Account & Project

1. **Go to [supabase.com](https://supabase.com)**
2. **Click "Start your project"** and sign up with GitHub/Google
3. **Create a new project:**
   - Organization: Choose or create one
   - Project name: `greencart` (or your preferred name)
   - Database password: Generate a strong password (save it!)
   - Region: Choose closest to your location
   - Pricing plan: Start with the free tier

4. **Wait for project setup** (usually takes 1-2 minutes)

## Step 2: Get Your Project Credentials

1. **In your Supabase dashboard**, go to **Settings** → **API**
2. **Copy these values:**
   - Project URL (looks like: `https://xxxxx.supabase.co`)
   - Project API Key (anon, public) - the long string starting with `eyJ...`

## Step 3: Configure Environment Variables

1. **Create a `.env` file** in your project root (same level as package.json)
2. **Add your credentials:**

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# App Configuration
VITE_APP_NAME=GreenCart
VITE_APP_URL=http://localhost:5173
```

⚠️ **Replace the placeholder values with your actual Supabase credentials!**

## Step 4: Set Up Database Schema

1. **In Supabase dashboard**, go to **SQL Editor**
2. **Create a new query**
3. **Copy and paste the entire contents** from `supabase/migrations/20250703195842_pink_art.sql`
4. **Click "Run"** to execute the schema creation
5. **Create another new query**
6. **Copy and paste the entire contents** from `supabase/migrations/20250703195905_damp_tooth.sql`
7. **Click "Run"** to populate with sample data

## Step 5: Verify Database Setup

1. **Go to Table Editor** in Supabase dashboard
2. **You should see these tables:**
   - `user_profiles`
   - `products` (with sample eco-friendly products)
   - `orders`
   - `order_items`
   - `goals`
   - `achievements` (with sample achievements)
   - `user_achievements`

## Step 6: Test the Connection

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** to `http://localhost:5173`

3. **Test the features:**
   - Browse products (should load from database)
   - Try to sign up for a new account
   - Login with your new account
   - Check if protected routes work (Dashboard, Profile, etc.)

## Step 7: Enable Authentication (if needed)

1. **In Supabase dashboard**, go to **Authentication** → **Settings**
2. **Configure these settings:**
   - Enable email confirmations: **Disabled** (for development)
   - Site URL: `http://localhost:5173`
   - Redirect URLs: `http://localhost:5173/**`

## 🔧 Troubleshooting

### Common Issues:

**1. "Missing Supabase environment variables" error:**
- Make sure your `.env` file is in the project root
- Restart your dev server after adding environment variables
- Check that variable names start with `VITE_`

**2. Database connection errors:**
- Verify your project URL and API key are correct
- Make sure you've run both SQL migration files
- Check that RLS policies are enabled

**3. Authentication not working:**
- Verify Site URL in Supabase Auth settings
- Check that email confirmation is disabled for development
- Make sure you're using the correct anon key (not service role key)

**4. Products not loading:**
- Check that the products table has data
- Verify the API service functions are working
- Look for console errors in browser dev tools

### Testing Checklist:

✅ Environment variables are set correctly  
✅ Database schema is created  
✅ Sample data is populated  
✅ Authentication works (sign up/login)  
✅ Products page loads data from database  
✅ Protected routes redirect to login when not authenticated  
✅ User profile is created automatically on first login  

## 🎉 Success!

If everything is working correctly, you should now have:

- ✅ A fully functional authentication system
- ✅ Product catalog loaded from your database
- ✅ Working shopping cart with persistence
- ✅ User profiles and dashboard
- ✅ Goal setting and achievement system
- ✅ Complete full-stack application!

## Next Steps

Once your Supabase connection is working:

1. **Customize the products** in your database
2. **Add more achievements** and goals
3. **Test the shopping cart** and order flow
4. **Explore the dashboard** and user features
5. **Deploy to production** when ready

## 🆘 Need Help?

If you encounter any issues:

1. Check the browser console for error messages
2. Verify your Supabase project is active and running
3. Make sure all environment variables are correct
4. Try refreshing your Supabase project if it's sleeping (free tier)

Let me know if you need assistance with any of these steps!