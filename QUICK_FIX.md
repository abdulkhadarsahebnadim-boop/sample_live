# Quick Fix: Not Showing Video on Other Devices

## The Problem

When you open `viewvideo.html` on another device, it shows "Waiting for video stream..." and doesn't display the screen sharing content.

## The Solution

**Firebase is not configured!** The app needs Firebase to work across different devices.

## Quick Setup (5 Minutes)

### Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com
2. Click **"Add project"**
3. Enter project name (e.g., "screen-share")
4. Continue → Disable Google Analytics (optional) → Create project

### Step 2: Enable Realtime Database

1. In Firebase Console, click **"Realtime Database"** (left sidebar)
2. Click **"Create Database"**
3. Choose location (closest to you)
4. Select **"Start in test mode"**
5. Click **"Enable"**

### Step 3: Set Database Rules

1. In Realtime Database, go to **"Rules"** tab
2. Replace the rules with:

```json
{
  "rules": {
    "screenShare": {
      ".read": true,
      ".write": true
    }
  }
}
```

3. Click **"Publish"**

### Step 4: Get Your Firebase Config

1. Click **Settings (gear icon)** → **"Project settings"**
2. Scroll to **"Your apps"** section
3. Click **`</>` (Web)** icon
4. Register app (name it "Screen Share Web")
5. Copy the `firebaseConfig` object that appears

### Step 5: Update firebase-config.js

Open `firebase-config.js` and replace ALL the values:

```javascript
const FIREBASE_CONFIG = {
    apiKey: "AIzaSy...",                    // ← Your actual API key
    authDomain: "your-project.firebaseapp.com",  // ← Your auth domain
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",  // ← Your database URL
    projectId: "your-project-id",           // ← Your project ID
    storageBucket: "your-project.appspot.com",  // ← Your storage bucket
    messagingSenderId: "123456789",         // ← Your sender ID
    appId: "1:123456789:web:abcdef"         // ← Your app ID
};
```

**Save the file!**

### Step 6: Deploy to Render

1. Commit and push your changes:
```bash
git add firebase-config.js
git commit -m "Configure Firebase"
git push
```

2. Render will automatically redeploy

### Step 7: Test

1. Open `index.html` on Device 1 → Start Sharing
2. Open `viewvideo.html` on Device 2 → Should see live stream! 🎉

## Verification

After setup, check browser console (F12) on `viewvideo.html`:
- ✅ Should see: "Firebase initialized for cross-device viewing"
- ✅ Should see: "Firebase connection successful"
- ❌ Should NOT see: "Firebase not configured"

## Still Not Working?

1. **Check firebase-config.js** - Make sure ALL values are replaced (no "YOUR_*_HERE")
2. **Check Firebase Rules** - Make sure rules allow read/write
3. **Check Browser Console** - Look for error messages
4. **Verify Database URL** - Must start with `https://` and end with `.firebaseio.com`

## Need Help?

- Check `RENDER_DEPLOYMENT.md` for detailed instructions
- Check `FIREBASE_SETUP.md` for more setup details

---

**After Firebase setup, your app will work on ANY device, ANYWHERE!** 🌍

