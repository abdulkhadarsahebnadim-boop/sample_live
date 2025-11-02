# Deployment Guide for GitHub Pages & Netlify

This guide explains how to deploy the live streaming webpage to GitHub Pages or Netlify.

## ⚠️ Important Note

**GitHub Pages and Netlify only serve static HTML/CSS/JS files.** They cannot run the RTMP server (Node.js server). 

You need **TWO components**:
1. **Static Website** - Deployed to GitHub Pages/Netlify (this repository)
2. **RTMP Server** - Must be running on a separate server with Node.js

---

## 🚀 Deployment Options

### Option 1: Deploy to GitHub Pages

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add index.html admin.html styles.css netlify.toml
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/web-rtmp-stream.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main branch**
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/web-rtmp-stream/`

3. **Update Configuration**
   - Edit `index.html`
   - Change `STREAM_SERVER` to your RTMP server URL
   - Commit and push changes

---

### Option 2: Deploy to Netlify

#### Method A: Deploy via Netlify UI

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up / Login
   - Click **New site from Git**
   - Choose **GitHub**
   - Select your repository
   - Build settings:
     - **Branch to deploy:** main
     - **Build command:** (leave empty)
     - **Publish directory:** ./
   - Click **Deploy site**

3. **Your site is live!**
   - URL: `https://random-name-123.netlify.app`

#### Method B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Follow prompts to connect to your site
```

---

## 🖥️ Setting Up RTMP Server

Since GitHub Pages/Netlify can't run Node.js, you need a separate server:

### Hosting Options for RTMP Server:

1. **DigitalOcean** (Recommended)
   - Start at $6/month
   - Droplet with Ubuntu
   - Run your Node.js server

2. **Heroku** (Free tier removed)
   - Paid plans available
   - Easy deployment

3. **Railway.app** (Good alternative)
   - $5/month
   - Automatic deployments from GitHub

4. **Your Own Computer** (For testing)
   - Can use localhost
   - Not accessible to others

### Quick Server Setup:

```bash
# On your server (e.g., DigitalOcean)
git clone YOUR_GITHUB_REPO
cd web-rtmp-stream
npm install

# Run server
npm start

# Or use PM2 for production
npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

---

## 🔧 Configuration

### Update Your Webpage

Edit `index.html` and change:

```javascript
// Line 44 in index.html
const STREAM_SERVER = 'https://your-server-ip.com';  // Update this!
```

Or for local testing:
```javascript
const STREAM_SERVER = 'http://localhost:8000';
```

### Update Admin Page

The admin page (`admin.html`) shows RTMP configuration. Update URLs as needed.

---

## 📋 Complete Setup Example

### 1. GitHub Pages Setup
```
Repository: https://github.com/username/web-rtmp-stream
Live URL: https://username.github.io/web-rtmp-stream
```

### 2. Server Setup (DigitalOcean)
```
Server IP: 123.456.789.10
RTMP URL: rtmp://123.456.789.10:1935/live
HLS URL: http://123.456.789.10:8000
```

### 3. Update index.html
```javascript
const STREAM_SERVER = 'http://123.456.789.10:8000';
```

### 4. OBS Configuration
```
Service: Custom
Server: rtmp://123.456.789.10:1935/live
Stream Key: livestream
```

---

## 🧪 Testing

1. **Test locally first:**
   ```bash
   # Terminal 1 - Start server
   npm start
   
   # Terminal 2 - Serve static files
   npx http-server
   
   # Open browser: http://localhost:8080
   ```

2. **Configure OBS** with your server details

3. **Start streaming** and check if it appears on the webpage

---

## 🔐 Security Notes

For production:
- Change default stream keys
- Add authentication to RTMP server
- Use HTTPS/SSL certificates
- Configure CORS properly
- Add rate limiting
- Use firewall rules

---

## 📞 Troubleshooting

### Stream not showing?
- Check RTMP server is running
- Verify STREAM_SERVER URL in index.html
- Check browser console for errors
- Ensure CORS is enabled on server

### CORS errors?
Add to your server.js:
```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
```

### Port issues?
- Ensure ports 1935 and 8000 are open
- Check firewall settings
- Verify no other services are using those ports

---

## 📚 Additional Resources

- [Node Media Server Docs](https://github.com/illuspas/Node-Media-Server)
- [HLS.js Documentation](https://github.com/video-dev/hls.js)
- [OBS Studio Guide](https://obsproject.com/wiki)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

Good luck with your live streaming setup! 🎥✨

