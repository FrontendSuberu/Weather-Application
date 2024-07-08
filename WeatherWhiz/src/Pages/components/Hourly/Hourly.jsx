import React from 'react'

export default function Hourly() {
    const search = async () => {
        try {
            const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=db11b493e04596fcad665032c4455652"
            const response = await fetch(url);
            const hourData = response.json();
            console.log(hourData);

        }
        catch (error) {
            console.log("Error.")
        }

        
        }

        return (
            <p>
            Hello
            </p>
          )

}






 




