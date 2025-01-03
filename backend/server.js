const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: '*'  
}));

app.use(express.json());
app.use('/api/weather', weatherRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
