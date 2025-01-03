const axios = require('axios');

const getWeather = async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;

  console.log(" received post data, city  = ", city);
  
  try {
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

    const data = response.data;

    console.log("response data = ", data);

    res.json({
      name: data.location.name,
      weather: data.current.condition.text,
      temp: data.current.temp_c,
      icon: data.current.condition.icon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'City not found or API error' });
  }
};

module.exports = { getWeather };
