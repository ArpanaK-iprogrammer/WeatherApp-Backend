const axios = require('axios');

//let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

let api_key = "3ba0e5eedae49070b51c85ad8c30def0";
let url = "https://api.openweathermap.org/data/2.5/weather"

const postData = async(req,res) => {
    console.log("weatherRoute");
    try {
        let city = req.body.city;
        console.log(req.body);
        console.log(city);

        if(!city){
            return res.status(400).json({error:"city name is required"})
        }

        const response = await axios.get(url,{
            params:{
                q:city,
                appid:api_key,
            }
        })
        const weatherData = response.data;
        res.send(weatherData)   
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"failed to fetched data"})  
    }
}

module.exports = postData;