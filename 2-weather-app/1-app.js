// using weather-stack api

const request = require("postman-request");

const url = "http://api.weatherstack.com/current?access_key=0fb77617684b3e2b59e220f8bee8fb17&query=18.5204,73.8567";

// {
//     url : url,
//     json : json => will parse response as json
// }
request({url : url, json : true}, (err, response) => {
    // console.log(response)
    // const data = JSON.parse(response.body);
    console.log(response.body.current);
} )