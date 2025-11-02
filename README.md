# Web RTMP Stream

A live streaming solution to stream from OBS to a webpage with admin settings.

## Features

- 🎥 Live streaming from OBS Studio to webpage
- ⚙️ Admin panel for configuration
- 📊 Real-time stream statistics
- 🎨 Modern, responsive UI
- 🔄 Auto HLS transcoding

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## OBS Setup

1. Open OBS Studio
2. Go to **Settings → Stream**
3. Select **"Custom..."** as Service
4. Enter the following details:
   - **Server**: `rtmp://localhost:1935/live`
   - **Stream Key**: `livestream` (or your custom key from admin panel)
5. Click **OK**
6. Click **Start Streaming** in OBS

## Usage

- **Home Page**: Visit `http://localhost:3000` to view the live stream
- **Admin Panel**: Visit `http://localhost:3000/admin` to configure settings

## Configuration

Default settings:
- **Web Server Port**: 3000
- **RTMP Server Port**: 1935
- **HTTP Server Port**: 8000
- **Stream Key**: livestream

You can change these settings in the admin panel.

## Technical Details

- **Backend**: Node.js with Express
- **RTMP Server**: node-media-server
- **Video Player**: HLS.js
- **Frontend**: EJS templates with vanilla JavaScript

## Requirements

- Node.js 14+
- OBS Studio
- FFmpeg (optional, for advanced transcoding)

## License

ISC

