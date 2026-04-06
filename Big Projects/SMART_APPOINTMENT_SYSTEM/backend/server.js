import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
import http from 'http';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import os from 'os';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const socketService = require('./services/socketService');
import authRoutes from './routes/auth.js';
import doctorsRoutes from './routes/doctors.js';
import appointmentsRoutes from './routes/appointments.js';
import { startReminderJob } from './services/reminderService.js';

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('ERROR: MONGODB_URI or MONGO_URI not found in environment variables');
  process.exit(1);
}
if (!process.env.JWT_SECRET) {
  console.error('ERROR: JWT_SECRET not found in environment variables');
  process.exit(1);
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
  pingTimeout: 60000,
  pingInterval: 25000,
});

app.set('io', io);
// socketService.init(io);  // Why this generates error?

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/appointments', appointmentsRoutes);
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    startReminderJob();
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, '0.0.0.0', () => {
      const interfaces = os.networkInterfaces();
      const ips = [];
      for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
          if (iface.family === 'IPv4' && !iface.internal) ips.push(iface.address);
        }
      }
      console.log(`\n✅ Server running on:`);
      console.log(`   Local:   http://localhost:${PORT}`);
      ips.forEach(ip => console.log(`   Network: http://${ip}:${PORT}`));
      if (ips.length > 0) console.log(`\n📱 Mobile Access: http://${ips[0]}:${PORT}\n`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });