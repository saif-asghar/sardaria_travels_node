require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const { setEngine } = require("crypto");
const { stringify } = require("querystring");
const { Duffel } = require("@duffel/api");
const async = require("async");
const https = require("follow-redirects").https;
const fs = require("fs");
const mongoose = require("mongoose");
require("./conn/db");
const md5 = require('md5');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                1. { Duffel Token START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Shifted to Environment Variables.

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 1. { Duffel Token END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@









// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                      2. { Duffel Token Request Create START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const duffel = new Duffel({
  
  token: process.env.DUFFEL_TEST_TOKEN,
  debug: { verbose: true },
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                      2. { Duffel Token Request Create END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                      3. { Email Schema and Model START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const emailSchema = new mongoose.Schema({
  email: String,
  number: String,
});

const Email = mongoose.model("Email", emailSchema);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                       3. { Email Schema and Model END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                4. { ID Schema and Model START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const signupSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

const Identification = mongoose.model("Identification", signupSchema);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 4. { ID Schema and Model END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                   5. { Get Request Login & Signup Page (Display Login Page On Home Route) Start }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.get("/", function (req, res) {
  res.render("loginSignUp");
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                    5. { Get Request Login & Signup Page (Display Login Page On Home Route) END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  6. { Post Request to Save Signup Info to MongoDB Atlas and Log Into Home Page START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/signup', function(req, res){
  
  const signUpfName = req.body.signupfName;
  const signUplName = req.body.signuplName;
  const signUpEmail = req.body.signupEmail;
  const signUpPass = req.body.signupPass;

  const identity = new Identification({
    fname: signUpfName,
    lname: signUplName,
    email: signUpEmail,
    password: md5(signUpPass),
  });
  identity.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render('home', {signUpfName: signUpfName, signUplName: signUplName, signUpEmail: signUpEmail});
    };
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                   6. { Post Request to Save Signup Info to MongoDB Atlas and Log Into Home Page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                7. { Post Request to Authorize Input from Database and Redirect Towards Home Page START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/login', function(req, res){
  
  const loginEmail = req.body.loginEmail;
  const loginPass = md5(req.body.loginPass);
  

  Identification.findOne({email: loginEmail}, function(err, foundUser){
    if(err){
      console.log(err)
    }else{
        if(foundUser){
          if(foundUser.password === loginPass){

            const signUpfName = foundUser.fname;
            const signUplName = foundUser.lname;
            const signUpEmail = loginEmail;

            res.render('home', {
              signUpfName: signUpfName,
              signUplName: signUplName,
              signUpEmail: signUpEmail
            });
          }else{
            console.log('incorrect pass');
          }
        }else{
          console.log('incorrect email');
        }
      }
    });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                7. { Post Request to Authorize Input from Database and Redirect Towards Home Page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@









// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            8. { Home Page to Make Post Requests to Recieve Data From Duffel (HTTPS Method) START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post("/home", function (req, res) {
  

  let fromRoundTrip = req.body.fromRoundTrip.slice(0, 3);
  let toRoundTrip = req.body.toRoundTrip.slice(0, 3);
  let departingDateRoundTrip = req.body.departingDateRoundTrip;
  let returnDateRoundTrip = req.body.returnDateRoundTrip;
  let adults = Number(req.body.adults);
  let checkRadioBtn = req.body.group1;
  let numberOfChildren = Number(req.body.children);
  let cabinClass = req.body.cabinClasses;
  const returnData = 'Return';
  
  const em = req.body.signUpEmail;
  
  

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         8(1). { Post Request To Duffel (Round Trip, One Way & Multi City) START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//                                     IF ROUND TRIP IS SELECTED

  if (checkRadioBtn === 'roundTrip') {

//                              IF NO. OF CHILDREN IS 0 INSIDE ROUND TRIP

    if (numberOfChildren === 0) {
      
//                               IF NO. OF ADULTS IS 1 INSIDE ROUND TRIP

      if (adults === 1) { 
       
       var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  },
                  {
                      "origin": "ATL",
                      "destination": "NYC",
                      "departure_date": "2022-09-10"
                  }
              ],
              "passengers": [
                  {
                      "type": "adult"
                  }
              ],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      postData.data.slices[1].origin = toRoundTrip;
      postData.data.slices[1].destination = fromRoundTrip;
      postData.data.slices[1].departure_date = returnDateRoundTrip;
      postData.data.cabin_class = cabinClass;



      }
      
//                              ELSE NO. OF ADULTS IS 1+ INSIDE ROUND TRIP

      else {
        let adultsStringMore = [];
        for (i = 0; i < adults + 1 ; i++) {
          adultsStringMore.push({
            "type": "adult"
        },);
        };
        adultsStringMore = adultsStringMore.slice(0, -1);
        // adultsStringMore =  JSON.parse(adultsStringMore);
        // console.log(adultsStringMore);

        

        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  },
                  {
                      "origin": "ATL",
                      "destination": "NYC",
                      "departure_date": "2022-09-10"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      postData.data.slices[1].origin = toRoundTrip;
      postData.data.slices[1].destination = fromRoundTrip;
      postData.data.slices[1].departure_date = returnDateRoundTrip;
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = adultsStringMore;
     

      }
    } 

//                             ELSE IF NO. OF CHILDREN IS 1 INSIDE ROUND TRIP

  else if (numberOfChildren === 1) {

      let childAge = req.body.childAge1;
      // console.log(childAge);

//                               IF NO. OF ADULTS IS 1 INSIDE ROUND TRIP

      if (adults === 1) {
        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  },
                  {
                      "origin": "ATL",
                      "destination": "NYC",
                      "departure_date": "2022-09-10"
                  }
              ],
              "passengers": [
                  {
                      "type": "adult"
                  },
                  {
                      "age": ""
                  }
              ],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      postData.data.slices[1].origin = toRoundTrip;
      postData.data.slices[1].destination = fromRoundTrip;
      postData.data.slices[1].departure_date = returnDateRoundTrip;
      postData.data.cabin_class = cabinClass;
      postData.data.passengers[1].age = childAge;
      // console.log(postData.data.passengers);S

    
      } 
      
//                              ELSE NO. OF ADULTS IS 1+ INSIDE ROUND TRIP
      
      else {
        
        
        
        let adultsStringMore = [];
        adultsStringMore.push({
            "age": ""
        });
        adultsStringMore[0].age = childAge;

        for (i = 0; i < adults ; i++) {
          adultsStringMore.push({
            "type": "adult"
        },);
        };
        // adultsStringMore = adultsStringMore.slice(0, -1);
        // adultsStringMore =  JSON.parse(adultsStringMore);
        // console.log(adultsStringMore);

        

        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  },
                  {
                      "origin": "ATL",
                      "destination": "NYC",
                      "departure_date": "2022-09-10"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      postData.data.slices[1].origin = toRoundTrip;
      postData.data.slices[1].destination = fromRoundTrip;
      postData.data.slices[1].departure_date = returnDateRoundTrip;
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = adultsStringMore;
      // console.log(postData.data.passengers);

    
      }
    }

//                             ELSE NO. OF CHILDREN IS 1+ INSIDE ROUND TRIP

   else {
    
    let age = [req.body.childAge1, req.body.childAge2, req.body.childAge3, req.body.childAge4, req.body.childAge5, req.body.childAge6, req.body.childAge7, req.body.childAge8, req.body.childAge9];
    
//                               IF NO. OF ADULTS IS 1 INSIDE ROUND TRIP

     if (adults === 1) {
        
   
        let childrenStringMore = [];
   
        childrenStringMore.push({
          "type": "adult"
        },);
   
        for (i = 0; i < numberOfChildren; i++) {
   
          childrenStringMore.push({
            "age": ""
          },)
   
          childrenStringMore[i + 1].age = age[i];
   
        }
   
        // childrenStringMore = childrenStringMore.slice(0, -1);
        console.log(childrenStringMore);


        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  },
                  {
                      "origin": "ATL",
                      "destination": "NYC",
                      "departure_date": "2022-09-10"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      postData.data.slices[1].origin = toRoundTrip;
      postData.data.slices[1].destination = fromRoundTrip;
      postData.data.slices[1].departure_date = returnDateRoundTrip;
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = childrenStringMore;
      // console.log(postData);
 
      }
      
//                               IF NO. OF ADULTS IS 1+ INSIDE ROUND TRIP

      else {
        
        
      

      let childrenStringMore = [];


      for (i = 0; i < numberOfChildren; i++) {

        childrenStringMore.push({
          "age": ""
        },)

        childrenStringMore[i].age = age[i];

      }

      // childrenStringMore = childrenStringMore.slice(0, -1);
      // console.log(childrenStringMore);

        let adultsStringMore = [];
        

        for (i = 0; i < adults ; i++) {
          adultsStringMore.push({
            "type": "adult"
        },);
        };
        // adultsStringMore = adultsStringMore.slice(0, -1);
        // adultsStringMore =  JSON.parse(adultsStringMore);
        // console.log(adultsStringMore);

        let concattedArrays = adultsStringMore.concat(childrenStringMore);
        // console.log(concattedArrays);

        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  },
                  {
                      "origin": "ATL",
                      "destination": "NYC",
                      "departure_date": "2022-09-10"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      postData.data.slices[1].origin = toRoundTrip;
      postData.data.slices[1].destination = fromRoundTrip;
      postData.data.slices[1].departure_date = returnDateRoundTrip;
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = concattedArrays;
      // console.log(postData.data.passengers);
 
      }

    };










// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                               8(1.1) { Post Request HTTPS Method for Round Trip START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
var options = {
  method: "POST",
  hostname: "api.duffel.com",
  path: "/air/offer_requests?return_offers=true",
  'headers': {
    'Authorization':
      `Bearer ${process.env.DUFFEL_TEST_TOKEN}`,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Duffel-Version": "beta",
  },
  maxRedirects: 20,
};
var req = https.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

  response.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    let body1 = body.toString();
    let body2 = JSON.parse(body1);
    // console.log(body1);
    // const offers = body2.data.offers;
    console.log(body2);




    Identification.findOne({email: em}, function(err, foundUser){
      if(err){
        console.log(err)
      }else{
          if(foundUser){
            
  
              const signUpfName = foundUser.fname;
              const signUplName = foundUser.lname;
              
  
              res.render("info", {
                signUpfName: signUpfName,
                signUplName: signUplName,
                body2: body2,
                departingDateRoundTrip: departingDateRoundTrip,
                returnDateRoundTrip: returnDateRoundTrip,
                returnData: returnData,
                em: em,
                fromRoundTrip: fromRoundTrip,
                toRoundTrip: toRoundTrip,
              });
              
            
          }else{
            console.log('user not found. Impossible!');
          }
        }
      });
  });

  response.on("error", function (error) {
    console.error(error);
    let error2 = error;
    res.redirect('error', {error2: error2});
  });
});
postData = JSON.stringify(postData);
req.write(postData);
req.end();

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                               8(1.1) { Post Request HTTPS Method for Round Trip END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

}


//                                    ELSE IF ONE WAY IS SELECTED  
  else if(checkRadioBtn === 'oneWay') {

//                              IF NO. OF CHILDREN IS 0 INSIDE ONE WAY
   
    if (numberOfChildren === 0) {
      
//                               IF NO. OF ADULTS IS 1 INSIDE ONE WAY
      
      if (adults === 1) { 
       
       var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  }
              ],
              "passengers": [
                  {
                      "type": "adult"
                  }
              ],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      postData.data.cabin_class = cabinClass;



      }

//                               IF NO. OF ADULTS IS 1+ INSIDE ONE WAY

  else {
        let adultsStringMore = [];
        for (i = 0; i < adults + 1 ; i++) {
          adultsStringMore.push({
            "type": "adult"
        },);
        };
        adultsStringMore = adultsStringMore.slice(0, -1);
        // adultsStringMore =  JSON.parse(adultsStringMore);
        // console.log(adultsStringMore);

        

        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = adultsStringMore;
     

      }
    } 

//                              IF NO. OF CHILDREN IS 1 INSIDE ONE WAY

  else if (numberOfChildren === 1) {

      let childAge = req.body.childAge1;
      // console.log(childAge);

//                               IF NO. OF ADULTS IS 1 INSIDE ONE WAY

      if (adults === 1) {
        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  }
              ],
              "passengers": [
                  {
                      "type": "adult"
                  },
                  {
                      "age": ""
                  }
              ],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
     
      postData.data.cabin_class = cabinClass;
      postData.data.passengers[1].age = childAge;
      // console.log(postData.data.passengers);S

    
      } 

//                               IF NO. OF ADULTS IS 1+ INSIDE ONE WAY

  else {
        
        
        
        let adultsStringMore = [];
        adultsStringMore.push({
            "age": ""
        });
        adultsStringMore[0].age = childAge;

        for (i = 0; i < adults ; i++) {
          adultsStringMore.push({
            "type": "adult"
        },);
        };
        // adultsStringMore = adultsStringMore.slice(0, -1);
        // adultsStringMore =  JSON.parse(adultsStringMore);
        // console.log(adultsStringMore);

        

        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
    
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = adultsStringMore;
      // console.log(postData.data.passengers);

    
      }
    }

//                              IF NO. OF CHILDREN IS 1+ INSIDE ONE WAY

   else {
    
    let age = [req.body.childAge1, req.body.childAge2, req.body.childAge3, req.body.childAge4, req.body.childAge5, req.body.childAge6, req.body.childAge7, req.body.childAge8, req.body.childAge9];

//                               IF NO. OF ADULTS IS 1 INSIDE ONE WAY

     if (adults === 1) {
        
        
   
        let childrenStringMore = [];
   
        childrenStringMore.push({
          "type": "adult"
        },);
   
        for (i = 0; i < numberOfChildren; i++) {
   
          childrenStringMore.push({
            "age": ""
          },)
   
          childrenStringMore[i + 1].age = age[i];
   
        }
   
        // childrenStringMore = childrenStringMore.slice(0, -1);
        console.log(childrenStringMore);


        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = childrenStringMore;
      // console.log(postData);
 
      }  

//                               IF NO. OF ADULTS IS 1+ INSIDE ONE WAY

      else {
        
        
      

      let childrenStringMore = [];


      for (i = 0; i < numberOfChildren; i++) {

        childrenStringMore.push({
          "age": ""
        },)

        childrenStringMore[i].age = age[i];

      }

      // childrenStringMore = childrenStringMore.slice(0, -1);
      // console.log(childrenStringMore);

        let adultsStringMore = [];
        

        for (i = 0; i < adults ; i++) {
          adultsStringMore.push({
            "type": "adult"
        },);
        };
        // adultsStringMore = adultsStringMore.slice(0, -1);
        // adultsStringMore =  JSON.parse(adultsStringMore);
        // console.log(adultsStringMore);

        let concattedArrays = adultsStringMore.concat(childrenStringMore);
        // console.log(concattedArrays);

        var postData = {
          "data": {
              "slices": [
                  {
                      "origin": "NYC",
                      "destination": "ATL",
                      "departure_date": "2022-09-01"
                  }
              ],
              "passengers": [],
              "cabin_class": "business"
          }
      };
      
      postData.data.slices[0].origin = fromRoundTrip;
      postData.data.slices[0].destination = toRoundTrip;
      postData.data.slices[0].departure_date = departingDateRoundTrip;
      
      postData.data.cabin_class = cabinClass;
      postData.data.passengers = concattedArrays;
      // console.log(postData.data.passengers);
 
      }

    };










// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                               8(1.2) { Post Request HTTPS Method for Round Trip START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
       
  var options = {
    method: "POST",
    hostname: "api.duffel.com",
    path: "/air/offer_requests?return_offers=true",
    'headers': {
      'Authorization':
        `Bearer ${process.env.DUFFEL_TEST_TOKEN}`,
      'Accept': "application/json",
      "Content-Type": "application/json",
      "Duffel-Version": "beta",
    },
    maxRedirects: 20,
  };
  var req = https.request(options, function (response) {
    var chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      let body1 = body.toString();
      let body2 = JSON.parse(body1);
      // console.log(body1);
      const offers = body2.data.offers;
      console.log(body2);


      Identification.findOne({email: em}, function(err, foundUser){
        if(err){
          console.log(err)
        }else{
            if(foundUser){
              
    
                const signUpfName = foundUser.fname;
                const signUplName = foundUser.lname;
                
    
                res.render("infoOneWay", {
                  signUpfName: signUpfName,
                  signUplName: signUplName,
                  body2: body2,
                  departingDateRoundTrip: departingDateRoundTrip,
                  returnDateRoundTrip: returnDateRoundTrip,
                  offers: offers,
                  em: em,
                  returnData: 'One Way',
                  fromRoundTrip: fromRoundTrip,
                  toRoundTrip: toRoundTrip,
                });
                
              
            }else{
              console.log('user not found. Impossible!');
            }
          }
        });

      
    });

    response.on("error", function (error) {
      console.error(error);
      let error2 = error;
      res.redirect('error', {error2: error2});
    });
  });
  postData = JSON.stringify(postData);
  req.write(postData);
  req.end();

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                               8(1.2) { Post Request HTTPS Method for Round Trip END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   


  }


//                                    ELSE MULTI CITY IS SELECTED    

  else{
  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                          8(1) { Post Request To Duffel (Round Trip, One Way & Multi City) END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  



  });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            8. { Home Page to Make Post Requests to Recieve Data From Duffel (HTTPS Method) END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            8. { Checkout Page Round Trip START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


app.post('/checkoutRT', function(req, res){

  
  const idOfOffer = req.body.getIdOffers;
  const em2 = req.body.emailForCheckout;
  // https://api.duffel.com/air/seat_maps?offer_id=off_0000ANItzqILfR94neM1O4
  
  var options = 
  {
    'method': 'GET',
    'hostname': 'api.duffel.com',
    'path': `/air/offers/${idOfOffer}`,
    'headers': {
      'Authorization':
        `Bearer ${process.env.DUFFEL_TEST_TOKEN}`,
      'Accept': "application/json",
      "Content-Type": "application/json",
      "Duffel-Version": "beta",
    },
    'maxRedirects': 20
  };
  
  
   
  var req = https.request(options, function (response1) {
    var chunks = [];
   
    response1.on("data", function (chunk) {
      chunks.push(chunk);
    });
   
    response1.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      let body1 = body.toString();
      let body2 = JSON.parse(body1);

      console.log(body2);

      Identification.findOne({email: em2}, function(err, foundUser){
        if(err){
          console.log(err)
        }else{
            if(foundUser){
              
              
                const signUpfName = foundUser.fname;
                const signUplName = foundUser.lname;
              //  console.log(foundUser);
              
              
              
                
                res.render("checkoutRoundTrip", {
                  signUpfName: signUpfName,
                  signUplName: signUplName,
                  idOfOffer: idOfOffer,
                  em2: em2,
                  body2: body2
                });
                
                
              }else{
                console.log('user not found. Impossible!');
              }
            }
          });
        });
        
        response1.on("error", function (error) {
        console.error(error);
      });
    });
    
    
    
    
    
    req.end();
    
    
    
    
  });
  
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            8. { Checkout Page Round Trip END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@










// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            8. { Booking Page Round Trip Start }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/booking', function(req, res){

  const bookingEmail = req.body.bookingEmail;
  const bookingPhoneNumber = req.body.bookingPhoneNumber;
  const noOfPassengers = req.body.noOfPassengers;
  const idOfOffer = req.body.idOfOffer;
  const finalPrice = req.body.finalPrice;

  const passengersID = [
    req.body.idOfPassenger0,
    req.body.idOfPassenger1,
    req.body.idOfPassenger2,
    req.body.idOfPassenger3, 
    req.body.idOfPassenger4, 
    req.body.idOfPassenger5, 
    req.body.idOfPassenger6, 
    req.body.idOfPassenger7, 
    req.body.idOfPassenger8, 
    req.body.idOfPassenger9, 
    req.body.idOfPassenger10, 
    req.body.idOfPassenger11, 
    req.body.idOfPassenger12, 
    req.body.idOfPassenger13, 
    req.body.idOfPassenger14, 
    req.body.idOfPassenger15, 
    req.body.idOfPassenger16, 
    req.body.idOfPassenger17, 
    req.body.idOfPassenger18, 
    req.body.idOfPassenger19, 
    req.body.idOfPassenger20
  ];




  
  
  const givenTitles = [
    req.body.passengersTitle0,
    req.body.passengersTitle1,
    req.body.passengersTitle2,
    req.body.passengersTitle3, 
    req.body.passengersTitle4, 
    req.body.passengersTitle5, 
    req.body.passengersTitle6, 
    req.body.passengersTitle7, 
    req.body.passengersTitle8, 
    req.body.passengersTitle9, 
    req.body.passengersTitle10, 
    req.body.passengersTitle11, 
    req.body.passengersTitle12, 
    req.body.passengersTitle13, 
    req.body.passengersTitle14, 
    req.body.passengersTitle15, 
    req.body.passengersTitle16, 
    req.body.passengersTitle17, 
    req.body.passengersTitle18, 
    req.body.passengersTitle19, 
    req.body.passengersTitle20
  ];


  const givenNames = [
    req.body.passengersgivenName0, 
    req.body.passengersgivenName1, 
    req.body.passengersgivenName2, 
    req.body.passengersgivenName3, 
    req.body.passengersgivenName4, 
    req.body.passengersgivenName5, 
    req.body.passengersgivenName6, 
    req.body.passengersgivenName7, 
    req.body.passengersgivenName8, 
    req.body.passengersgivenName9, 
    req.body.passengersgivenName10,
    req.body.passengersgivenName11,
    req.body.passengersgivenName12,
    req.body.passengersgivenName13,
    req.body.passengersgivenName14,
    req.body.passengersgivenName15,
    req.body.passengersgivenName16,
    req.body.passengersgivenName17,
    req.body.passengersgivenName18,
    req.body.passengersgivenName19,
    req.body.passengersgivenName20
  ];
  
  
  const givenFamilyName = [
    req.body.passengersfamilyName0, 
    req.body.passengersfamilyName1, 
    req.body.passengersfamilyName2, 
    req.body.passengersfamilyName3, 
    req.body.passengersfamilyName4, 
    req.body.passengersfamilyName5, 
    req.body.passengersfamilyName6, 
    req.body.passengersfamilyName7, 
    req.body.passengersfamilyName8, 
    req.body.passengersfamilyName9, 
    req.body.passengersfamilyName10,
    req.body.passengersfamilyName11,
    req.body.passengersfamilyName12,
    req.body.passengersfamilyName13,
    req.body.passengersfamilyName14,
    req.body.passengersfamilyName15,
    req.body.passengersfamilyName16,
    req.body.passengersfamilyName17,
    req.body.passengersfamilyName18,
    req.body.passengersfamilyName19,
    req.body.passengersfamilyName20
  ];
  
const givenDOB = [
  req.body.passengersbornon0, 
  req.body.passengersbornon1, 
  req.body.passengersbornon2, 
  req.body.passengersbornon3, 
  req.body.passengersbornon4, 
  req.body.passengersbornon5, 
  req.body.passengersbornon6, 
  req.body.passengersbornon7, 
  req.body.passengersbornon8, 
  req.body.passengersbornon9, 
  req.body.passengersbornon10, 
  req.body.passengersbornon11, 
  req.body.passengersbornon12, 
  req.body.passengersbornon13, 
  req.body.passengersbornon14, 
  req.body.passengersbornon15, 
  req.body.passengersbornon16, 
  req.body.passengersbornon17, 
  req.body.passengersbornon18, 
  req.body.passengersbornon19, 
  req.body.passengersbornon20
];

const givenGender = [
  req.body.passengersgender0, 
  req.body.passengersgender1, 
  req.body.passengersgender2, 
  req.body.passengersgender3, 
  req.body.passengersgender4, 
  req.body.passengersgender5, 
  req.body.passengersgender6, 
  req.body.passengersgender7, 
  req.body.passengersgender8, 
  req.body.passengersgender9, 
  req.body.passengersgender10, 
  req.body.passengersgender11, 
  req.body.passengersgender12, 
  req.body.passengersgender13, 
  req.body.passengersgender14, 
  req.body.passengersgender15, 
  req.body.passengersgender16, 
  req.body.passengersgender17, 
  req.body.passengersgender18, 
  req.body.passengersgender19, 
  req.body.passengersgender20
];


// console.log(bookingEmail, bookingPhoneNumber, noOfPassengers, givenTitles, givenNames, givenFamilyName, givenDOB, givenGender, idOfOffer, passengersID);








var options = {
  'method': 'POST',
  'hostname': 'api.duffel.com',
  'path': '/air/orders',
  'headers': {
    'Authorization':
      `Bearer ${process.env.DUFFEL_TEST_TOKEN}`,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Duffel-Version": "beta",
  },
  'maxRedirects': 20
};
 
var req = https.request(options, function (response) {
  var chunks = [];
 
  response.on("data", function (chunk) {
    chunks.push(chunk);
  });
 
  response.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    console.log(JSON.parse(body));

  });
 
  response.on("error", function (error) {
    console.error(error);
  });
});
 
var postData = {
  "data": {
    "selected_offers": [
      ""
    ],
    "payments": [
      {
        "type": "balance",
        "currency": "USD",
        "amount": ""
      }
    ],
    "passengers": []
  }
};

postData.data.selected_offers = [idOfOffer];
postData.data.payments[0].amount = finalPrice;
let increasedNumber = 0;

for(i = 0; i < noOfPassengers; i++){

  postData.data.passengers.push({
    "phone_number": bookingPhoneNumber,
    "email": bookingEmail,
    "born_on": givenDOB[increasedNumber],
    "title": givenTitles[increasedNumber],
    "gender": givenGender[increasedNumber],
    "family_name": givenFamilyName[increasedNumber],
    "given_name": givenNames[increasedNumber],
    "id": passengersID[increasedNumber]
  });
  
  increasedNumber++;
}


// console.log(postData.data.passengers);


console.log(postData.data.passengers);
 postData = JSON.stringify(postData);

req.write(postData);
 
req.end();





































  
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            8. { Booking Page Round Trip END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@








app.post('/checkoutOW', function(req, res){

  
  const idOfOffer = req.body.getIdOffers;
  const em2 = req.body.emailForCheckout;
  
  
  var options = {
    'method': 'GET',
    'hostname': 'api.duffel.com',
    'path': `/air/offers/${idOfOffer}`,
    'headers': {
      'Authorization':
        "Bearer duffel_test_D9M5y5YkDFZ6zasjspan-yRFsydrWA7u9oN9W2GarYB",
      'Accept': "application/json",
      "Content-Type": "application/json",
      "Duffel-Version": "beta",
    },
    'maxRedirects': 20
  };
   
  var req = https.request(options, function (response) {
    var chunks = [];
   
    response.on("data", function (chunk) {
      chunks.push(chunk);
    });
   
    response.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      let body1 = body.toString();
      let body2 = JSON.parse(body1);

      console.log(body2);

      Identification.findOne({email: em2}, function(err, foundUser){
        if(err){
          console.log(err)
        }else{
            if(foundUser){
              
              
                const signUpfName = foundUser.fname;
                const signUplName = foundUser.lname;
              //  console.log(foundUser);
              
              
              
                
                res.render("checkoutOneWay", {
                  signUpfName: signUpfName,
                  signUplName: signUplName,
                  idOfOffer: idOfOffer,
                  em2: em2,
                  body2: body2
                });
                
                
              }else{
                console.log('user not found. Impossible!');
              }
            }
          });
        });
        
   
    response.on("error", function (error) {
      console.error(error);
    });
  });
   
  req.end();




});














// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                     9. { Saving to Database For Newsletter START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post("/submit1", function(req, res){
  
  
const clientEmailId = req.body.email;
const clientPhoneNo = req.body.tel;

if (clientPhoneNo === "") {
  const email = new Email({
    email: clientEmailId,
  });
  email.save();
} else if (clientEmailId === "") {
  const number = new Email({
    number: clientPhoneNo,
  });

  number.save();
} else {
  const email = new Email({
    email: clientEmailId,
    number: clientPhoneNo,
  });
  email.save();
}
res.render('successNewsletter');

});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                     9. { Saving to Database For Newsletter END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                     10. { Logout Post Method START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/logout', function(req, res){
  res.redirect('/');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                     10. { Logout Post Method END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                              11. { Listening On Port 3000 & Heroku Live Server START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is up and running on port 3000");
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                              11. { Listening On Port 3000 & Heroku Live Server END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
