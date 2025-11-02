const express = require('express');
const path = require('path');
const NodeMediaServer = require('node-media-server');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

// Admin API endpoints
app.post('/api/config', (req, res) => {
  // Save configuration (in production, save to database)
  console.log('Configuration updated:', req.body);
  res.json({ success: true, message: 'Configuration saved' });
});

app.get('/api/config', (req, res) => {
  // Get configuration (in production, fetch from database)
  res.json({
    rtmpPort: 1935,
    httpPort: 8000,
    streamKey: 'livestream'
  });
});

// RTMP Media Server Configuration
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*',
    mediaroot: './media'
  }
};

const nms = new NodeMediaServer(config);

nms.on('preConnect', (id, args) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('postConnect', (id, args) => {
  console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('prePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // Add authentication logic here if needed
});

nms.on('postPublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('prePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('postPlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('doneConnect', (id, args) => {
  console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

// Start servers
nms.run();
app.listen(PORT, () => {
  console.log(`Web server is running on http://localhost:${PORT}`);
  console.log(`RTMP server is running on rtmp://localhost:1935`);
});

