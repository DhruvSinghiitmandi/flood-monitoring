const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Data = require('./models/data.js')
var cors = require('cors');
const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // You can replace '*' with your specific origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const uri = YOUR_MONGODB_URI;


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/getdata/', (req, res) => {
    console.log("getdata")
    
    
        try {
            const fetchData = async () => {
                const data = await Data.find({});
                
                console.log(data.length);
                res.status(200).send(data);
                // console.log("Number of documents:", data.length);
            }
            fetchData(); // Call the fetchData function to retrieve data
        } catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
    
    
   
});

app.get('/', (req, res) => {
   
    console.log("/")
    res.status(200).send("Hi");

});

// Start the server
mongoose.connect(uri)
.then(() => {
    console.log('connected to MongoDB')
    const port = 3001
    app.listen(3001, ()=> {
        console.log(`Node API app is running on http://localhost:`+port)
    });
}).catch((error) => {
    console.log(error)
})
