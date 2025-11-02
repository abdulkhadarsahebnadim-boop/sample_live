# Quick Start for Static Hosting (GitHub Pages/Netlify)

## 📁 Files for Static Deployment

You need these files in your repository root:

```
📦 Web RTMP Stream
├── 📄 index.html          # Main streaming page
├── 📄 admin.html          # Admin settings page
├── 📄 styles.css          # All styling
├── 📄 netlify.toml        # Netlify configuration
├── 📄 .gitignore          # Git ignore rules
├── 📄 README.md           # Project documentation
└── 📄 DEPLOYMENT.md       # Deployment guide
```

## ⚡ Quick Deploy to GitHub Pages

### 1. Initialize Git Repository
```bash
cd "Web RTMP"
git init
git add index.html admin.html styles.css netlify.toml .gitignore
git commit -m "Initial commit: Static streaming webpage"
```

### 2. Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/web-rtmp-stream.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** / **root**
5. Click **Save**

✅ Your site is now live at: `https://YOUR_USERNAME.github.io/web-rtmp-stream/`

---

## ⚡ Quick Deploy to Netlify

### Option A: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `Web RTMP` folder
3. Done! Site is live instantly

### Option B: Connect to GitHub
1. Push to GitHub (steps above)
2. Go to netlify.com → **New site from Git**
3. Connect to GitHub → Select repository
4. Click **Deploy**

✅ Your site is live at: `https://random-name.netlify.app`

---

## 🔧 Important Configuration

### Before deploying, update in `index.html`:

**Find this line (around line 44):**
```javascript
const STREAM_SERVER = 'http://localhost:8000';  // Change this!
```

**Replace with your RTMP server URL:**
```javascript
const STREAM_SERVER = 'https://your-server.com';  // Your server URL
```

---

## 🖥️ Running the RTMP Server (Required!)

**Important:** You still need a separate Node.js server for RTMP streaming!

### On your server (DigitalOcean, Railway, etc.):

```bash
# Clone the full repository
git clone https://github.com/YOUR_USERNAME/web-rtmp-stream.git
cd web-rtmp-stream

# Install dependencies
npm install

# Start the server
npm start
```

Your server needs to run on:
- **Port 1935** - RTMP input from OBS
- **Port 8000** - HTTP HLS output for web player

---

## 🎬 OBS Setup

1. Open **OBS Studio**
2. Settings → **Stream**
3. Service: **Custom**
4. Server: `rtmp://your-server.com:1935/live`
5. Stream Key: `livestream`
6. Click **OK**
7. **Start Streaming**

---

## 🧪 Local Testing

Want to test everything locally?

### Terminal 1: Start RTMP Server
```bash
cd web-rtmp-stream
npm start
```

### Terminal 2: Serve HTML Files
```bash
# Option A: Python
python -m http.server 8080

# Option B: Node.js http-server
npx http-server

# Option C: VS Code Live Server extension
```

Open: `http://localhost:8080`

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Pushed HTML files to GitHub
- [ ] Enabled GitHub Pages or connected Netlify
- [ ] Updated `STREAM_SERVER` in `index.html`
- [ ] Set up Node.js server for RTMP
- [ ] Configured OBS with correct RTMP URL
- [ ] Tested stream is working

---

## 🐛 Common Issues

### "Stream not showing"
- ✅ Check RTMP server is running
- ✅ Verify `STREAM_SERVER` URL in index.html
- ✅ Make sure OBS is actually streaming
- ✅ Check browser console for errors

### "CORS errors"
Add to your `server.js`:
```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
```

### "Ports in use"
Change ports in `server.js`:
```javascript
const PORT = process.env.PORT || 3001;  // Different port
```

---

## 📚 Need More Help?

- 📖 Full deployment guide: See `DEPLOYMENT.md`
- 🌐 Server setup: See `README.md`
- ⚙️ Configuration: See `admin.html`

---

**You're all set! Happy streaming! 🎥✨**

