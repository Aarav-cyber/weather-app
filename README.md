# 🌤️ Modern Weather App

A beautiful, responsive weather application built with React that provides real-time weather information and forecasts for cities worldwide. Features modern 3D effects, smooth animations, and automatic dark/light mode support.

![Weather App Preview](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.0-purple?style=for-the-badge&logo=vite)
![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)

## ✨ Features

### 🌟 Modern Design
- **3D Hover Effects** - Cards lift and scale on hover with smooth transitions
- **Glass Morphism** - Beautiful backdrop blur effects and transparency
- **Gradient Backgrounds** - Weather-specific color schemes (sunny, cloudy, rainy, snowy, stormy)
- **Smooth Animations** - Fade-in, slide-in, and floating animations throughout the app

### 🎨 Dark/Light Mode
- **Automatic Detection** - Follows system preference using `prefers-color-scheme`
- **Seamless Switching** - No manual toggle needed
- **Optimized Colors** - Perfect contrast ratios for both themes
- **CSS Variables** - Consistent theming across all components

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Touch-Friendly** - Large touch targets and smooth interactions
- **Flexible Layouts** - Adapts gracefully from mobile to desktop
- **Progressive Enhancement** - Works on all modern browsers

### 🔍 Advanced Search
- **Real-time City Search** - Powered by GeoDB API
- **Async Pagination** - Handles large datasets efficiently
- **Debounced Input** - Optimized API calls with 600ms delay
- **Error Handling** - Graceful fallbacks for failed requests

### 📊 Weather Information
- **Current Weather** - Temperature, feels like, humidity, pressure, wind speed
- **7-Day Forecast** - Detailed daily predictions with expandable details
- **Weather Icons** - Beautiful animated weather representations
- **Multiple Units** - Celsius temperature display

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.1** - Latest React with concurrent features
- **Vite 7.1.0** - Lightning-fast build tool and dev server
- **ES6+ JavaScript** - Modern JavaScript features

### UI Components & Libraries
- **react-select-async-paginate** - Advanced search component with pagination
- **react-accessible-accordion** - Accessible accordion for forecast details
- **Inter Font** - Modern, readable typography

### Styling & Design
- **CSS3** - Modern CSS features including:
  - CSS Custom Properties (Variables)
  - CSS Grid & Flexbox
  - Backdrop Filter (Glass morphism)
  - CSS Animations & Transitions
  - Media Queries for responsive design

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite** - Build tool, dev server, and optimization

## 🌐 APIs Used

### 1. GeoDB API (RapidAPI)
- **Purpose**: City search and geocoding
- **Endpoint**: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`
- **Features**:
  - Real-time city search with autocomplete
  - Geographic coordinates retrieval
  - Country code information
  - Pagination support

### 2. OpenWeatherMap API
- **Purpose**: Weather data and forecasts
- **Base URL**: `https://api.openweathermap.org/data/2.5`
- **Endpoints Used**:
  - `/weather` - Current weather data
  - `/forecast` - 5-day weather forecast
- **Features**:
  - Real-time weather conditions
  - Temperature, humidity, pressure, wind data
  - Weather icons and descriptions
  - Metric units (Celsius)

## 📁 Project Structure

```
Weather App/
├── public/
│   └── icons/                 # Weather condition icons
│       ├── 01d.png           # Clear sky (day)
│       ├── 01n.png           # Clear sky (night)
│       ├── 02d.png           # Few clouds (day)
│       ├── 02n.png           # Few clouds (night)
│       ├── 03d.png           # Scattered clouds
│       ├── 04d.png           # Broken clouds
│       ├── 09d.png           # Shower rain
│       ├── 10d.png           # Rain (day)
│       ├── 10n.png           # Rain (night)
│       ├── 11d.png           # Thunderstorm
│       ├── 13d.png           # Snow
│       ├── 50d.png           # Mist
│       └── unknown.png       # Fallback icon
├── src/
│   ├── components/
│   │   ├── api.js            # API configuration and endpoints
│   │   ├── search.jsx        # Main search component with weather logic
│   │   ├── search.css        # Search component styling
│   │   ├── weather-box/
│   │   │   ├── weather-box.jsx    # Current weather display
│   │   │   └── weather.css        # Weather box styling
│   │   └── forecast/
│   │       ├── forecast.jsx       # 7-day forecast component
│   │       └── forecast.css       # Forecast styling
│   ├── App.jsx               # Main app component
│   ├── App.css               # App-level styling
│   ├── index.css             # Global styles and CSS variables
│   └── main.jsx              # App entry point
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API keys**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   VITE_GEO_API_KEY=your_rapidapi_key
   ```

   **Get API Keys:**
   - **OpenWeatherMap**: Sign up at [openweathermap.org](https://openweathermap.org/api)
   - **GeoDB (RapidAPI)**: Subscribe at [rapidapi.com](https://rapidapi.com/wirefreetech/api/geodb-cities)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 Key Features Implementation

### 1. Modern CSS Architecture
```css
:root {
  /* CSS Variables for theming */
  --bg-primary: #ffffff;
  --accent-primary: #3b82f6;
  --shadow-3d: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --accent-primary: #60a5fa;
  }
}
```

### 2. 3D Hover Effects
```css
.weather-box:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.4);
}
```

### 3. Weather-Specific Styling
```javascript
const getWeatherClass = (weatherMain) => {
  const weatherMap = {
    'Clear': 'sunny',
    'Clouds': 'cloudy',
    'Rain': 'rainy',
    'Snow': 'snowy',
    'Thunderstorm': 'stormy'
  };
  return weatherMap[weatherMain] || 'cloudy';
};
```

### 4. Responsive Design
```css
@media (max-width: 768px) {
  .weather-box {
    max-width: 350px;
    border-radius: 20px;
  }
}

@media (max-width: 480px) {
  .weather-box {
    max-width: 320px;
    border-radius: 16px;
  }
}
```

## 🔧 Configuration

### Environment Variables
- `VITE_WEATHER_API_KEY` - OpenWeatherMap API key
- `VITE_GEO_API_KEY` - RapidAPI GeoDB key

### Build Configuration
The project uses Vite for fast development and optimized builds:
- **Hot Module Replacement** - Instant updates during development
- **Tree Shaking** - Removes unused code in production
- **Code Splitting** - Optimized bundle sizes
- **Asset Optimization** - Compressed images and assets

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6)
- **Secondary**: Dark Blue (#1d4ed8)
- **Success**: Green (#16a34a)
- **Error**: Red (#dc2626)
- **Background**: White/Light Gray (Light Mode), Dark Blue (Dark Mode)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Responsive Sizing**: Scales from 14px to 2.5rem

### Spacing System
- **Base Unit**: 0.25rem (4px)
- **Spacing Scale**: 0.5rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem

### Shadows
- **Small**: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **Medium**: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- **Large**: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
- **3D**: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

## 🚀 Performance Optimizations

### Code Splitting
- Component-based lazy loading
- Route-based code splitting (if needed)

### Asset Optimization
- Compressed weather icons
- Optimized images with WebP format
- Minimal bundle size

### Caching Strategy
- API response caching
- Static asset caching
- Service worker ready

## 🔒 Security Considerations

### API Key Management
- Environment variables for sensitive data
- Client-side API calls (consider server-side proxy for production)
- Rate limiting awareness

### Input Validation
- Sanitized user inputs
- Error boundary implementation
- Graceful error handling

## 🧪 Testing

### Manual Testing Checklist
- [ ] Search functionality works across different cities
- [ ] Weather data displays correctly
- [ ] Forecast expands and collapses properly
- [ ] Responsive design on mobile devices
- [ ] Dark/light mode switching
- [ ] Error states display appropriately
- [ ] Loading states work correctly

### Browser Compatibility
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📈 Future Enhancements

### Planned Features
- [ ] Location-based weather (GPS)
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Weather maps integration
- [ ] Multiple language support
- [ ] Weather widgets
- [ ] Offline support with PWA

### Technical Improvements
- [ ] Unit testing with Jest
- [ ] E2E testing with Cypress
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] PWA implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- **OpenWeatherMap** for weather data API
- **GeoDB (RapidAPI)** for city search functionality
- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Inter Font** for beautiful typography



**Built with ❤️ using React, Vite, and modern web technologies**

*Last updated: August 2024*
