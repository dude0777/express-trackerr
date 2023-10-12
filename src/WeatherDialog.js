
import { useEffect, useState } from "react";
import { getweather } from './services/Weather'
function WeatherDialog() {

    const [weather, setWeather] = useState()
    useEffect(() => {
        const data = getweather()
        setWeather(data)
    }, [])

    console.log(weather)
    return (

        <div>





        </div>


    );
}

export default WeatherDialog;