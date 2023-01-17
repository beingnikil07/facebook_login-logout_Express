const express = require('express');
const app = express();
const PORT = 5000;
const session = require('express-session'); //including express session
const { v4: uuidv4 } = require('uuid') //including uuid
const path = require('path');

const mainFile = path.join(__dirname);

app.use(express.static(mainFile));
app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: `${uuidv4}`,
    resave: true,
    saveUninitialized: true
}))
//data
const userdata = {
    email: 'rananikki011@gmail.com',
    password: "nik123"
}
//jaise he koi banda / ko call kre 
app.get("/", (req, res) => {
    res.sendFile(mainFile + '/index.html')
})

//ye dikheag humko form submit route prr aur user ki details save ho lengi session storage mai 
app.post("/form_submit", (req, res) => {
    if (req.body.email == userdata.email && req.body.password == userdata.password) {
        req.session.usermail = req.body.email;
        res.send(`Logged in successfully ${req.session.usermail}`);
    } else {
        res.send("Invalid user id and password");
    }
})

app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    else {
        console.log("Server running on port", PORT);
    }
})
