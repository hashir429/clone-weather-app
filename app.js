const express = require("express");
const request = require("request");
const nodemon = require("nodemon")

const app = express();

const port = process.env.PORT || 3000;

// const address = process.argv[2];

// const url = `http://api.weatherstack.com/current?access_key=5d65501d5a614d46a203bdeded323cde&query=${address}`;

// request({url, json: true}, (error, response, body) => {
//     if(error){
//         console.log("can't connect to weather server");
//     }else{
//         console.log(`Name: ${body.request.query} || temperature: ${body.current.temperature} || Cloud: ${body.current.cloudcover}%`)
//     }
// });

app.use(express.static(__dirname+"/public"));


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})