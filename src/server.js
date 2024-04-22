const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Data = require('./models/data.js')
const app = express();
const port = 3001;
const uri = 'mongodb+srv://dp42:1234@cluster0.fcqtdbe.mongodb.net/cluster0';
// Connect to MongoDB


//COMMENTED at 1.46
// const Schema = mongoose.Schema;

// mongoose.model('Data',
//     new Schema({ IMG: String, TIME: String, VEL: Number }),
//     'outputs');
// // Create a model
// var questions = mongoose.model('Data');


// UNCOMMENT FROM HERE
// mongoose.connection.once('open', () => {
//     questions = mongoose.model('Data'); // Define the questions model after connecting to the database
//     console.log("HIIIIIIII");

//     try {
//         const fetchData = async () => {
//             questions.find
//             const data = await questions.find({});
            
//             console.log(data.length);
//             // console.log("Number of documents:", data.length);
//         }
//         fetchData(); // Call the fetchData function to retrieve data
//     } catch (err) {
//         console.error(err);
//     }
// });

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/getdata/', (req, res) => {
    console.log("GI")
    
    
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