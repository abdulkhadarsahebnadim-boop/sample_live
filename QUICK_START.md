# Quick Start Guide

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The servers will start on:
- **Web Server**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **RTMP Server**: rtmp://localhost:1935
- **HLS Server**: http://localhost:8000

## OBS Studio Setup

1. Open OBS Studio

2. Go to **File → Settings → Stream**

3. Configure the stream:
   - **Service**: Custom
   - **Server**: `rtmp://localhost:1935/live`
   - **Stream Key**: `livestream` (or your custom key)

4. Click **OK**

5. Click **Start Streaming** in OBS

6. Open your browser and go to http://localhost:3000

7. Your live stream should now be visible!

## Features

### Home Page (http://localhost:3000)
- Live stream player with HLS.js support
- Real-time online/offline status indicator
- Stream information display
- Responsive design for mobile and desktop

### Admin Panel (http://localhost:3000/admin)
- Configure RTMP and HTTP ports
- Set custom stream keys
- Copy RTMP URL and stream key to clipboard
- View server status
- Monitor stream statistics
- OBS setup instructions

## Troubleshooting

### Stream Not Showing
1. Check that OBS is actually streaming (red indicator)
2. Verify the stream URL in OBS matches the server configuration
3. Make sure ports 1935 and 8000 are not blocked by firewall
4. Check browser console for errors

### Port Already in Use
If you see "port already in use" errors, you can:
- Kill the process using the port
- Change the port in server.js configuration
- Update the admin panel configuration

### HLS Playback Issues
- Make sure your browser supports HLS (or uses HLS.js polyfill)
- Chrome, Firefox, and Safari have native HLS support
- Edge may need HLS.js library

## Development

For development with auto-reload:
```bash
npm run dev
```

## Production Deployment

For production deployment:
1. Set environment variables for ports and configuration
2. Use a proper database for storing configuration
3. Implement authentication for admin panel
4. Configure proper CORS settings
5. Set up HTTPS/SSL certificates
6. Use a reverse proxy (nginx) for better performance

## License

ISC

