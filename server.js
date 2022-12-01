// import packages 

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});


app.post("/",function(req,res){
    const userName = req.body.Uname;
    const email = req.body.Email;
    const password = req.body.Password;

    console.log(userName, email, password);  

    const data = { 
         members:[
            {
                email_address : email,
                status : subscribe,
                merge_fields:{
                    FNAME : firstName,
                    LNAME : lastName
                }

            }
         ]
    };
   const jsonData = JSON.stringify(data); 
   const url  = 'https://us8.api.mailchip.com/3.0/lists/4bcf3cbb43';

   const options = {
    method:"post",
    auth :"harsha:6cb39c0f980e03164ff64abdc1968e36-us8"
   }
   const request = https.request(url,Options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
   })
   request.write(jsonData);
   request.end();
});

app.listen(3000,function(){
    console.log("localhost ready to use");
})


//api key
//6cb39c0f980e03164ff64abdc1968e36-us8

