const express = require('express')
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler')
const {connectDB} = require('./config/dbConnection/dbConnection')
const jwt = require('./middleware/jwt');

const CONNECTION_STRING_TODOLIST = 'mongodb+srv://freeWork:kroWeerf@personalproject.ohw754o.mongodb.net/myContactsBackend?retryWrites=true&w=majority'
// connectDB(process.env.CONNECTION_STRING_CONTACTS); // database connected with database link
connectDB(CONNECTION_STRING_TODOLIST); // database connected with database link
// process.env.CONNECTION_STRING ='mongodb+srv://freeWork:kroWeerf@personalproject.ohw754o.mongodb.net/myContactsBackend?retryWrites=true&w=majority'
let userRoutes = require('./routes/userRoutes');
let todoListRoutes = require('./routes/todoListRoutes');
let settingRoutes = require('./routes/settingRoutes');
// let movieRoutes = require('./routes/movieRoutes');
let contactRoutes = require('./routes/contactRoutes');

const app = express()

const constant = require('./common/_constant').constant
const PORT = process.env.PORT || constant.PORT;
const AngularPort = 4200;



// use all the middleware here
app.use(express.json()) // this is inbuilt middleware // this is a body parser that parse the date stream which we receives from the client on the server side
// app.use("/api/contacts" , require("./routes/contactRoutes")) // use routes   // syntax app.use('url' , routerFunction)

app.use(function (req, res, next) {
    // console.log("req ports = " , req.address())
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("req ports = " , fullUrl)
    console.log("req host = " , req.get('host'))
    const clientUrl = req.header('Referer');
    console.log("clientUrl :- " ,clientUrl);
    
    // remove / from client url at last
    if(clientUrl){
        const modifiedClientUrl = clientUrl.slice(0,(clientUrl.length-1))
        res.setHeader('Access-Control-Allow-Origin',modifiedClientUrl );
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.use(cors());


// unsecure api
app.use("/todoLists" , todoListRoutes) // use routes   // syntax app.use('url' , routerFunction)
app.use("/contacts" , contactRoutes) // use routes   // syntax app.use('url' , routerFunction)

// use JWT auth to secure the api
app.use(jwt());
app.use("/users" , userRoutes) // use routes   // syntax app.use('url' , routerFunction)

app.use(errorHandler) // this is middlware where we chnage error to json // this is a custom middleware which accepts req , resp then in between which is going to transform in between into json


// server
const serverConfirmation = (success , fail) =>{
    if(!fail) console.log("server is runnig success fully on " , PORT);
}
app.listen(PORT , serverConfirmation)


