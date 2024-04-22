const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3001;
const uri = 'mongodb+srv://dp42:1234@cluster0.fcqtdbe.mongodb.net/cluster0';
// Connect to MongoDB


const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.log(err)        
    }
}
const Schema = mongoose.Schema;
connectDB()
mongoose.model('Data',
    new Schema({ IMG: String, TIME: String, VEL: Number }),
    'outputs');
// Create a model
var questions = mongoose.model('Data');


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
                questions.find
                const data = await questions.find({});
                
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
    app.listen(3001, ()=> {
        console.log(`Node API app is running on port 3001`)
    });
}).catch((error) => {
    console.log(error)
})