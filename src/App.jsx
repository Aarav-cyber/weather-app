import './App.css'
import Search from './components/search.jsx'

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="search-section">
          <h1 className="search-title">Weather Forecast</h1>
          <p className="search-subtitle">
            Get real-time weather information and forecasts for any city around the world
          </p>
          <Search />
        </div>
        <div className="weather-display">
          {/* Weather components will be rendered here by Search component */}
        </div>
      </div>
    </div>
  )
}

export default App

