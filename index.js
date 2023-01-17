const express = require('express');
const app = express();
const PORT = 3000;
const session = require('express-session'); //including express session
const { v4: uuidv4 } = require('uuid') //including uuid
const path = require('path');

const mainFile = path.join(__dirname);

app.use(express.static(mainFile));
app.use(express.urlencoded({
    extended: true
}))

//Humne ek session banaya to Jaise he hamara user login karega to uska ek
//unique session bnn jayega aur uss user ko phir hum ek unique id de denge   
app.use(session({
    //Basically uuid hamara ek unique number deta hai but session hamara string mai leta hai
    //isliye humne iss id ko string mai change krr liya 
    session: `${uuidv4}`,
    resave: true,
    saveUninitialized: true
}))

//Upper ke code se ek session bnn jayega 

