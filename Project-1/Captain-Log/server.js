require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const mongoose = require("mongoose")
const methodOverride = require('method-override');
const logsController = require("./controllers/logController")

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open",() => {
  console.log("connected to mongo")
})

// Setup Engine
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// ===== Middleware =====
app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

// ===== Routes =====
app.use("/logs", logsController)

// ===== Port setup =====
app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});














// const express = require("express");
// const app = express();
// //require  items from .env file
// require('dotenv').config();
// const mongoose = require('mongoose');
// const Log = require('./models/logs.js')

// // Database Connection------------------
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Database Connection Error/Success
// // Define callback functions for various events
// const db = mongoose.connection
// db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
// db.on('connected', () => console.log('mongo connected'));
// db.on('disconnected', () => console.log('mongo disconnected'));


// // MIDDLEWARE------------------------
// // Body parser middleware: give us access to req.body
// app.use(express.urlencoded({ extended: true }));


// // ROUTES
// // INDEX
// app.get('/logs', (req, res) => {
//   Log.find({}, (error, allLogs) => {
//     res.render('index.ejs', {
//       logs: allLogs,
//     });
//   });
// });


// // NEW
// app.get("/logs/new", (req, res) => {
//   res.render("new.ejs");
// })

// // DELETE
// // UPDATE
// // CREATE
// app.post("/logs", (req, res) => {
//   if (req.body.shipIsBroken === 'on') {
//     //if checked, req.body.completed is set to 'on'
//     req.body.shipIsBroken = true;
//   } else {
//     //if not checked, req.body.completed is undefined
//     req.body.shipIsBroken = false;
//   }
//   Log.create(req.body, (error, createdLog) => {
//     res.redirect('/logs');
//   });
// })


// // EDIT

// // SHOW
// app.get('/logs/:id', (req, res) => {
//   Log.findById(req.params.id, (err, foundLog) => {
//     res.render('show.ejs', {
//       log: foundLog,
//     });
//   });
// });




// //Used to access .env file
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log("listening....", PORT);
// })

