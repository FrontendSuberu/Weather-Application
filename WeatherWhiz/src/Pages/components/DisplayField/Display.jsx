import React, { useState, useEffect, useRef } from "react"
import Sun from "../DisplayField/icons/sun.svg"
import Rain from "../DisplayField/icons/rain.svg"
import Drizzle from "../DisplayField/icons/drizzle.svg"
import Snow from "../DisplayField/icons/snow.svg"

// import axios from 'axios'
import '../DisplayField/display.css';
import Error from "../Error/Error"

export default function Display() {

  // reference used to make input search dynamic
  const inputref = useRef();

  //usestate used to store the data from api
  const [weatherData, setWeatherData] = useState(false);

  //array of icons
  const allIcons = {
    "01d": Sun,
    "01n": Sun,
    "02d": Sun,
    "02n": Sun,
    "03d": Sun,
    "03n": Sun,
    "04d": Drizzle,
    "04n": Drizzle,
    "09d": Rain,
    "09n": Rain,
    "10d": Rain,
    "10n": Rain,
    "13d": Snow,
    "13n": Snow,
  }


  const search = async (city) => {
    // condition used if user clicks on button without specification
    //function used to make the api call
    // if (city == "") {
    //   alert("The Search Field Cannot be an Empty String");
    //   return;
    // }

    //try and catch used for error handling
    //async - used to locate data 
    //fetch - used to fetch
    //await - used to wait for the async until data is received
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=db11b493e04596fcad665032c4455652`;
      const response = await fetch(url);//
      const data = await response.json();
      console.log(data)
      const icon = allIcons[data.weather[0].icon] || Sun;
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        pressure: data.main.pressure,
        location: data.name,
        description: data.weather[0].description,
        icon: icon,
        sealevel: data.main.sea_level
      })


    } catch (error) {

    }
  };


  //useeffect
  useEffect(() => {
    search("")
  }, []);

  return (
    // display holder
    <div className='display'>
      <div className={`container`}>


        


{/* oprator to show data if api is correct or search is made else it shows the default screen */}
        {weatherData ?
        <>

        <div className="area">
          <div className="locate_date">
            <div className="location">
              <h3>{weatherData.location}</h3>
            </div>
          </div>


          {/* searchfield */}
          <div className="search">


            <form action="#" method="#" id="searchmain">
              <input type="text" required ref={inputref} placeholder="Search your City" name="" id="datafield" />
              <button onClick={() => search(inputref.current.value)} id="dtacheck">Check</button>
            </form>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none" role="img" class="icon nav-v2-search-btn__icon">
              <path d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12.814 12.8132L15.5 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>

        </div>


        {/* temperature field data and values */}
        <div className="temperature">
          <div className="tempdetails">
            <div className="tempimg">
              <img src={weatherData.icon} alt="" />
            </div>

            <div className="temp_value">
              <h1>{weatherData.temperature}°C</h1>
            </div>


          </div>

          {/* weather mood */}
          <div className="mood">
            <p>{weatherData.description}</p>
          </div>
        </div>


        {/* extra weather information */}
        <div className="otherdetails">
          <div className="extrainfo">
            <div>
              <p>Wind Speed</p>
              <p>{weatherData.windspeed} km/h</p>
            </div>

            <div>
              <p>Humidity</p>
              <p>{weatherData.humidity} %</p>
            </div>

            <div>
              <p>Pressure</p>
              <p>{weatherData.pressure} hPa</p>
            </div>

            <div>
              <p>Sea Level</p>
              <p>{weatherData.sealevel}</p>
            </div>
          </div>
        </div>

        </>:
        <>
        <div className="homepagenull">
          <p>Search for a Location</p>
          <form action="#" method="#" >
              <input type="text" required ref={inputref} placeholder="Search your City" name="" id="datafieldnull" />
              <button id="dataArea" onClick={() => search(inputref.current.value)}>Check</button>
            </form>
        </div>

        </>}


      </div>
    </div>

  )
}
