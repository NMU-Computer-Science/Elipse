import React from 'react';
import './Weather.css';
import Image from './Background.jpg';

const Card = () => {

//Svg function for my weather icons
const weatherConditions = {
  "clear-day": "./Icons/weather-icons-master/production/fill/all/clear-day.svg",
  "clear-night": "./Icons/weather-icons-master/production/fill/all/clear-night.svg",
  "cloudy": "./Icons/weather-icons-master/production/fill/all/cloudy.svg",
  "overcast": "./Icons/weather-icons-master/production/fill/all/overcast.svg",
  "overcast-day": "./Icons/weather-icons-master/production/fill/all/overcast-day.svg",
  "overcast-night": "./Icons/weather-icons-master/production/fill/all/overcast-night.svg",
  "partly-cloudy-day": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day.svg",
  "partly-cloudy-night": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night.svg",
  "fog": "./Icons/weather-icons-master/production/fill/all/fog.svg",
  "fog-day": "./Icons/weather-icons-master/production/fill/all/fog-day.svg",
  "fog-night": "./Icons/weather-icons-master/production/fill/all/fog-night.svg",
  "mist": "./Icons/weather-icons-master/production/fill/all/mist.svg",
  "haze": "./Icons/weather-icons-master/production/fill/all/haze.svg",
  "haze-day": "./Icons/weather-icons-master/production/fill/all/haze-day.svg",
  "haze-night": "./Icons/weather-icons-master/production/fill/all/haze-night.svg",
  "smoke": "./Icons/weather-icons-master/production/fill/all/smoke.svg",
  "smoke-particles": "./Icons/weather-icons-master/production/fill/all/smoke-particles.svg",
  "dust": "./Icons/weather-icons-master/production/fill/all/dust.svg",
  "dust-day": "./Icons/weather-icons-master/production/fill/all/dust-day.svg",
  "dust-night": "./Icons/weather-icons-master/production/fill/all/dust-night.svg",
  "dust-wind": "./Icons/weather-icons-master/production/fill/all/dust-wind.svg"
};
//CloudCover svgs
 const precipitation = {
  "rain": "./Icons/weather-icons-master/production/fill/all/rain.svg",
  "drizzle": "./Icons/weather-icons-master/production/fill/all/drizzle.svg",
  "raindrop": "./Icons/weather-icons-master/production/fill/all/raindrop.svg",
  "raindrops": "./Icons/weather-icons-master/production/fill/all/raindrops.svg",
  "snow": "./Icons/weather-icons-master/production/fill/all/snow.svg",
  "snowflake": "./Icons/weather-icons-master/production/fill/all/snowflake.svg",
  "sleet": "./Icons/weather-icons-master/production/fill/all/sleet.svg",
  "hail": "./Icons/weather-icons-master/production/fill/all/hail.svg",
  "partly-cloudy-day-drizzle": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-drizzle.svg",
  "partly-cloudy-day-rain": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-rain.svg",
  "partly-cloudy-day-snow": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-snow.svg",
  "partly-cloudy-day-sleet": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-sleet.svg",
  "partly-cloudy-day-hail": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-hail.svg",
  "partly-cloudy-night-drizzle": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-drizzle.svg",
  "partly-cloudy-night-rain": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-rain.svg",
  "partly-cloudy-night-snow": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-snow.svg",
  "partly-cloudy-night-sleet": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-sleet.svg",
  "partly-cloudy-night-hail": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-hail.svg"
};
//Im not naming everything lol too much work 
const storms = {
  "thunderstorms": "./Icons/weather-icons-master/production/fill/all/thunderstorms.svg",
  "thunderstorms-day": "./Icons/weather-icons-master/production/fill/all/thunderstorms-day.svg",
  "thunderstorms-night": "./Icons/weather-icons-master/production/fill/all/thunderstorms-night.svg",
  "thunderstorms-rain": "./Icons/weather-icons-master/production/fill/all/thunderstorms-rain.svg",
  "thunderstorms-snow": "./Icons/weather-icons-master/production/fill/all/thunderstorms-snow.svg",
  "thunderstorms-day-rain": "./Icons/weather-icons-master/production/fill/all/thunderstorms-day-rain.svg",
  "thunderstorms-day-snow": "./Icons/weather-icons-master/production/fill/all/thunderstorms-day-snow.svg",
  "thunderstorms-night-rain": "./Icons/weather-icons-master/production/fill/all/thunderstorms-night-rain.svg",
  "thunderstorms-night-snow": "./Icons/weather-icons-master/production/fill/all/thunderstorms-night-snow.svg",
  "lightning-bolt": "./Icons/weather-icons-master/production/fill/all/lightning-bolt.svg",
  "hurricane": "./Icons/weather-icons-master/production/fill/all/hurricane.svg",
  "tornado": "./Icons/weather-icons-master/production/fill/all/tornado.svg"
};
const sunMoon = {
  "sunrise": "./Icons/weather-icons-master/production/fill/all/sunrise.svg",
  "sunset": "./Icons/weather-icons-master/production/fill/all/sunset.svg",
  "moonrise": "./Icons/weather-icons-master/production/fill/all/moonrise.svg",
  "moonset": "./Icons/weather-icons-master/production/fill/all/moonset.svg",
  "moon-full": "./Icons/weather-icons-master/production/fill/all/moon-full.svg",
  "moon-new": "./Icons/weather-icons-master/production/fill/all/moon-new.svg",
  "moon-first-quarter": "./Icons/weather-icons-master/production/fill/all/moon-first-quarter.svg",
  "moon-last-quarter": "./Icons/weather-icons-master/production/fill/all/moon-last-quarter.svg",
  "moon-waxing-crescent": "./Icons/weather-icons-master/production/fill/all/moon-waxing-crescent.svg",
  "moon-waxing-gibbous": "./Icons/weather-icons-master/production/fill/all/moon-waxing-gibbous.svg",
  "moon-waning-crescent": "./Icons/weather-icons-master/production/fill/all/moon-waning-crescent.svg",
  "moon-waning-gibbous": "./Icons/weather-icons-master/production/fill/all/moon-waning-gibbous.svg",
  "solar-eclipse": "./Icons/weather-icons-master/production/fill/all/solar-eclipse.svg",
  "star": "./Icons/weather-icons-master/production/fill/all/star.svg",
  "starry-night": "./Icons/weather-icons-master/production/fill/all/starry-night.svg",
  "falling-stars": "./Icons/weather-icons-master/production/fill/all/falling-stars.svg"
};
const measurements = {
  "thermometer": "./Icons/weather-icons-master/production/fill/all/thermometer.svg",
  "thermometer-celsius": "./Icons/weather-icons-master/production/fill/all/thermometer-celsius.svg",
  "thermometer-fahrenheit": "./Icons/weather-icons-master/production/fill/all/thermometer-fahrenheit.svg",
  "thermometer-glass": "./Icons/weather-icons-master/production/fill/all/thermometer-glass.svg",
  "thermometer-glass-celsius": "./Icons/weather-icons-master/production/fill/all/thermometer-glass-celsius.svg",
  "thermometer-glass-fahrenheit": "./Icons/weather-icons-master/production/fill/all/thermometer-glass-fahrenheit.svg",
  "thermometer-mercury": "./Icons/weather-icons-master/production/fill/all/thermometer-mercury.svg",
  "thermometer-mercury-cold": "./Icons/weather-icons-master/production/fill/all/thermometer-mercury-cold.svg",
  "thermometer-colder": "./Icons/weather-icons-master/production/fill/all/thermometer-colder.svg",
  "thermometer-warmer": "./Icons/weather-icons-master/production/fill/all/thermometer-warmer.svg",
  "celsius": "./Icons/weather-icons-master/production/fill/all/celsius.svg",
  "fahrenheit": "./Icons/weather-icons-master/production/fill/all/fahrenheit.svg",
  "barometer": "./Icons/weather-icons-master/production/fill/all/barometer.svg",
  "compass": "./Icons/weather-icons-master/production/fill/all/compass.svg",
  "humidity": "./Icons/weather-icons-master/production/fill/all/humidity.svg"
};
const pressureWind = {
  "pressure-high": "./Icons/weather-icons-master/production/fill/all/pressure-high.svg",
  "pressure-high-alt": "./Icons/weather-icons-master/production/fill/all/pressure-high-alt.svg",
  "pressure-low": "./Icons/weather-icons-master/production/fill/all/pressure-low.svg",
  "pressure-low-alt": "./Icons/weather-icons-master/production/fill/all/pressure-low-alt.svg",
  "wind": "./Icons/weather-icons-master/production/fill/all/wind.svg",
  "windsock": "./Icons/weather-icons-master/production/fill/all/windsock.svg",
  "wind-beaufort-0": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-0.svg",
  "wind-beaufort-1": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-1.svg",
  "wind-beaufort-2": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-2.svg",
  "wind-beaufort-3": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-3.svg",
  "wind-beaufort-4": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-4.svg",
  "wind-beaufort-5": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-5.svg",
  "wind-beaufort-6": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-6.svg",
  "wind-beaufort-7": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-7.svg",
  "wind-beaufort-8": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-8.svg",
  "wind-beaufort-9": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-9.svg",
  "wind-beaufort-10": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-10.svg",
  "wind-beaufort-11": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-11.svg",
  "wind-beaufort-12": "./Icons/weather-icons-master/production/fill/all/wind-beaufort-12.svg"
};
const uvIndex = {
  "uv-index": "./Icons/weather-icons-master/production/fill/all/uv-index.svg",
  "uv-index-1": "./Icons/weather-icons-master/production/fill/all/uv-index-1.svg",
  "uv-index-2": "./Icons/weather-icons-master/production/fill/all/uv-index-2.svg",
  "uv-index-3": "./Icons/weather-icons-master/production/fill/all/uv-index-3.svg",
  "uv-index-4": "./Icons/weather-icons-master/production/fill/all/uv-index-4.svg",
  "uv-index-5": "./Icons/weather-icons-master/production/fill/all/uv-index-5.svg",
  "uv-index-6": "./Icons/weather-icons-master/production/fill/all/uv-index-6.svg",
  "uv-index-7": "./Icons/weather-icons-master/production/fill/all/uv-index-7.svg",
  "uv-index-8": "./Icons/weather-icons-master/production/fill/all/uv-index-8.svg",
  "uv-index-9": "./Icons/weather-icons-master/production/fill/all/uv-index-9.svg",
  "uv-index-10": "./Icons/weather-icons-master/production/fill/all/uv-index-10.svg",
  "uv-index-11": "./Icons/weather-icons-master/production/fill/all/uv-index-11.svg"
};
// Miscellaneous 
const miscellaneous = {
  "horizon": "./Icons/weather-icons-master/production/fill/all/horizon.svg",
  "umbrella": "./Icons/weather-icons-master/production/fill/all/umbrella.svg",
  "not-available": "./Icons/weather-icons-master/production/fill/all/not-available.svg",
  "partly-cloudy-day-fog": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-fog.svg",
  "partly-cloudy-day-haze": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-haze.svg",
  "partly-cloudy-day-smoke": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-day-smoke.svg",
  "partly-cloudy-night-fog": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-fog.svg",
  "partly-cloudy-night-haze": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-haze.svg",
  "partly-cloudy-night-smoke": "./Icons/weather-icons-master/production/fill/all/partly-cloudy-night-smoke.svg"
};

//Helper function for the icons 

function GetIcons(type,Conditon)
{

//Condtion can be anything from day to temp to uv index or whaterver

switch(type)
{
  case "weather":
    return weatherConditions[Conditon] || weatherConditions["clear-day"];
  case "precipitation":
    return precipitation[Conditon] || precipitation["rain"];
  case "storms":
    return storms[Conditon] || storms["thunderstorms"];
  case "sunMoon":
    return sunMoon[Conditon] || sunMoon["sunrise"];
  case "measurements":
    return measurements[Conditon] || measurements["thermometer"];
    case "pressureWind":
      return pressureWind[Conditon] || pressureWind["wind"];
      case "uvIndex":
        return uvIndex[Conditon] || uvIndex["uv-index"];
        case "miscellaneous":
          return miscellaneous[Conditon] || miscellaneous["humidity"];
  default:
    return null;
}





}
 
  
  return (
    <div className="weather-wrapper">

<div
  className="Body"
  style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>        
        <div className="main-container">
          <div className="header">
            <div className="nav-tabs">
              <a href="#" className="nav-tab active">Dashboard</a>
              <a href="#" className="nav-tab">Observatory</a>
              <a href="#" className="nav-tab">Stats</a>
            </div>
            <div className="header-actions">
              <div className="icon-btn">+</div>
              <div className="icon-btn">⚙</div>
              <div className="icon-btn">🔔</div>
              <div className="user-avatar">U</div>
            </div>
          </div>

          <div className="content-grid">
            {/* Left Column */}
            <div className="left-column">
              <div className="glass-card">
                <div className="card-header">
                                  <div className="switch-location-text">Switch Location</div><br></br>

                  <input type="text" className="location-search" placeholder="Search location..." />
                      Current Location :
                  <br></br>
                  <h1>

                    {/**Sudo Location Finna have this as new york */}
                    New York, NY
                  </h1>
                </div>
                <br></br>
                
              </div>

              <div className="glass-card">
                <div className="card-header">
                  <h1>
                     Current Conditions
                     </h1>

                    
                  
                  </div>
                <div className="temp-circle">
                  <div className="temp-inner">

                     <img 
                       src={GetIcons("precipitation", "partly-cloudy-day-drizzle")} 
                       alt="Temperature Icon" 
                       style={{ width: "80px", height: "80px" }}
                     />
                     <svg xmis='eclipse/src/Icons/weather-icons-master/production/fill/all/partly-cloudy-day-drizzle.svg'></svg>
                  </div>
                </div>
                <div className="condition-controls">
                  <button className="control-btn">Fan</button>
                  <button className="control-btn">Hot</button>
                  <button className="control-btn">Cold</button>
                  <button className="control-btn">Fan</button>
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div className="center-column">
              <div className="glass-card">
                <div className="weather-main">
                  <div className="main-temp">23°</div>
                  <div className="weather-desc">Northwest, 32.4 km/h</div>
                  <div className="hourly-forecast">
                    <div className="hour-item">
                      <div className="hour-temp">24°</div>
                      <div className="hour-time">7:00 AM</div>
                    </div>
                    <div className="hour-item">
                      <div className="hour-temp">25°</div>
                      <div className="hour-time">11:00 AM</div>
                    </div>
                    <div className="hour-item">
                      <div className="hour-temp">27°</div>
                      <div className="hour-time">12:00 PM</div>
                    </div>
                    <div className="hour-item">
                      <div className="hour-temp">28°</div>
                      <div className="hour-time">1:00 PM</div>
                    </div>
                    <div className="hour-item">
                      <div className="hour-temp">26°</div>
                      <div className="hour-time">2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card">
                <div className="card-header">Sun Times</div>
                <div className="sun-times-grid">
                  <div className="sun-item">
                    <div className="sun-icon" />
                    <div className="sun-time">6:42</div>
                    <div className="sun-label">Sunrise</div>
                  </div>
                  <div className="sun-item">
                    <div className="sun-icon" />
                    <div className="sun-time">7:23</div>
                    <div className="sun-label">Sunset</div>
                  </div>
                </div>
              </div>

              <div className="glass-card">
                <div className="card-header">Temperature Overtime</div>
                <div className="chart-placeholder">Chart Area</div>
                <div className="chart-controls">
                  <button className="chart-btn active">Week</button>
                  <button className="chart-btn">Month</button>
                  <button className="chart-btn">Year</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              <div className="glass-card">
                <div className="card-header">Light</div>
                <div className="toggle-item">
                  <span style={{fontSize: 13}}>Main Light</span>
                  <div className="toggle active" />
                </div>
              </div>

              <div className="glass-card">
                <div className="card-header">Monitoring</div>
                <div className="toggle-item">
                  <span style={{fontSize: 13}}>Weather Alerts</span>
                  <div className="toggle" />
                </div>
                <div className="toggle-item">
                  <span style={{fontSize: 13}}>UV Index</span>
                  <div className="toggle active" />
                </div>
              </div>

              <div className="glass-card">
                <div className="card-header">Weather Radio</div>
                <div className="radio-content">
                  <div className="radio-art" />
                  <div className="radio-title">Local Weather Report</div>
                  <div className="radio-artist">Weather Station</div>
                  <div className="radio-progress">02:11 ──── 03:32</div>
                  <div className="radio-controls">
                    <button className="radio-btn">⏮</button>
                    <button className="radio-btn">⏸</button>
                    <button className="radio-btn">⏭</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
