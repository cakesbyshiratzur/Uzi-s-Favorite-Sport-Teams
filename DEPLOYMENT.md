# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy this Next.js application.

### Steps:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Test Locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to verify everything works.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**
   
   **Option A: Using Vercel CLI**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

   **Option B: Using Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" > "Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js and deploy

5. **Configure Domain (Optional)**
   - In Vercel dashboard, go to your project
   - Click "Settings" > "Domains"
   - Add your custom domain

## Alternative: Deploy to Netlify

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder or connect your Git repo
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

## Alternative: Deploy to Your Own Server

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Use PM2 for Production** (recommended)
   ```bash
   npm install -g pm2
   pm2 start npm --name "uzis-sport-teams" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up Nginx as Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

If deploying to production, create environment variables in your hosting platform:

- `NEXT_PUBLIC_SITE_URL`: Your production URL

## Performance Optimization

The site is already optimized with:
- ✅ Next.js Image optimization
- ✅ Automatic code splitting
- ✅ Tailwind CSS purging
- ✅ Static generation where possible

## Post-Deployment Checklist

- [ ] Verify all external links work
- [ ] Test navigation on mobile devices
- [ ] Check page load speed (use Lighthouse)
- [ ] Verify SEO meta tags
- [ ] Test smooth scrolling
- [ ] Ensure logo displays correctly
- [ ] Check responsive design on various screen sizes

## Monitoring

Consider adding:
- Google Analytics for traffic monitoring
- Vercel Analytics (if using Vercel)
- Error tracking (Sentry, LogRocket)

## Support

For issues:
1. Check the build logs in your hosting platform
2. Verify all dependencies are installed
3. Check Node.js version (requires 18+)
4. Review the README.md for setup instructions

