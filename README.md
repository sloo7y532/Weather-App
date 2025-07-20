# Weather App

A modern, responsive weather application built with React that provides real-time weather information for any location worldwide.

![Weather App](https://img.shields.io/badge/React-18.0+-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Beautiful UI**: Clean and intuitive user interface with weather-themed visuals
- **Weather Icons**: Dynamic icons that change based on current weather conditions
- **Detailed Information**: View temperature, humidity, wind speed, and weather descriptions
- **Search Functionality**: Easy-to-use search to find weather for any location
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Live Demo

[View Live Demo](https://weather-app-iota-wheat-15.vercel.app/)

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env` file in the root directory
   - Add your weather API key:

   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 🔧 API Setup

This app uses a weather API service. To get your API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api) (or your preferred weather API provider)
2. Generate your free API key
3. Add it to your `.env` file as shown above

## 🎯 Usage

1. Open the application in your browser
2. Enter a city name in the search box
3. Press Enter or click the search button
4. View the current weather information including:
   - Current temperature
   - Weather condition with descriptive icon
   - Humidity levels
   - Wind speed
   - Weather description

## 🛠️ Technologies Used

- **React** - Frontend framework
- **CSS3** - Styling and animations
- **Weather API** - Real-time weather data
- **Create React App** - Project bootstrapping

## 📁 Project Structure

```
Weather-App/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── Components/
│   │   ├── Assets/
│   │   │   ├── clear.png
│   │   │   ├── cloud.png
│   │   │   ├── drizzle.png
│   │   │   ├── humidity.png
│   │   │   ├── rain.png
│   │   │   ├── search.png
│   │   │   ├── snow.png
│   │   │   └── wind.png
│   │   └── WeatherApp/
│   │       ├── WeatherApp.jsx
│   │       └── WeatherApp.css
│   ├── App.js
│   └── index.js
└── package.json
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons and design inspiration from various weather apps
- Built with Create React App

---

