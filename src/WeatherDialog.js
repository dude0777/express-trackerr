import React, { useEffect, useState } from "react";
import { getWeather } from './services/Weather';
import classes from './WeatherDialog.module.css'
function WeatherDialog() {
    const [weather, setWeather] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {



        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);


                getWeather(latitude, longitude).then((data) => {
                    setWeather(data);
                });
            },
            (error) => {
                console.error("Error getting geolocation:", error);
            }
        );

    }, []);

    return (
        <div className={classes.container}>
            {latitude && longitude && (
                <p className={classes.container2}>
                    Latitude: {latitude}, <br />
                    Longitude: {longitude}


                </p>
            )}
            {weather && (
                <div>

                    <p>Sunrise: {weather.results.sunrise}</p>
                    <p>Sunset: {weather.results.sunset}</p>

                </div>
            )}
        </div>
    );
}

export default WeatherDialog;
