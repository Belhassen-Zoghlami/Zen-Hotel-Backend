const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const adminRoutes = require('./routes/admin.routes')
const roomRoutes = require('./routes/room.routes');
const hotelRoutes = require('./routes/hotel.routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api',homeRoutes);
app.use('/api/admin',adminRoutes)
app.use('/api/Hotel',hotelRoutes);
app.use('/api/room',roomRoutes);

module.exports = app;
