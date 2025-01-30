import React from 'react';
import BlogPost from '../Components/BlogPost';
import { CopyBlock } from 'react-code-blocks';

function Post_2025_01_24() {
  return (
    <BlogPost 
      title="Demoing React Component that fetches data" 
      date="2025-01-27"
    >
      <p>Today, I introduced the idea of fetching JSON into a React component.  Here's the code we wrote.</p>

      <CopyBlock text={`function WeatherFetcher() {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setWeather(json)
      })
  }, []);

  return <>
    <h2>Weather Forecast</h2>
    <p>{
      weather === null
        ? 'Loading...'
        :
        weather.properties.periods.map((period, i) => <div>
          <img src={period.icon} alt={period.shortForecast} />
          <b>{period.name}</b>: {period.temperature}°F
        </div>)
    }</p>
  </>
}
        `} />

      <p>And here's what it does!</p>

      <WeatherFetcher />

    </BlogPost>
  );
}

function WeatherFetcher() {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setWeather(json)
      })
  }, []);

  return <>
    <h2>Weather Forecast</h2>
    <p>{
      weather === null
        ? 'Loading...'
        :
        weather.properties.periods.map((period, i) => <div>
          <img src={period.icon} alt={period.shortForecast} />
          <b>{period.name}</b>: {period.temperature}°F
        </div>)
    }</p>
  </>
}

export default Post_2025_01_24;