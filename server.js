/*const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (!err) console.log('db connected');
  else console.log('db error');
});

const NewSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const newModel = new mongoose.model('Collection', NewSchema);

const data = new newModel({ name: 'messy', age: 30 });
data.save();

app.listen(5000, () => {
  console.log('connection listen on 5000');
});

*/

const express = require('express');
const axios = require('axios');
const app = express();
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mydatabase';

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (!err) console.log('db connected');
  else console.log('db error');
});

// Define a schema for the data you want to store in MongoDB
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number
});



// Define a model for the data
const DataModel = mongoose.model('Data', dataSchema);

// Function to get data from an API
async function getDataFromAPI(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Function to post data to an API
async function postDataToAPI(url, data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Function to get data from MongoDB
async function getDataFromMongoDB() {
    try {
      const data = await DataModel.find().exec();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

// Function to post data to MongoDB
async function postDataToMongoDB(data) {
  try {
    const newData = new DataModel(data);
    const result = await newData.save();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Get data from an API and post it to MongoDB
app.get('/api1', async (req, res) => {
  const data = await getDataFromAPI(uri);
  await postDataToMongoDB(data);
  res.send('Data posted to MongoDB');
});

/*app.get('/api/message', (req, res) => {
    const message = mongodb://localhost:27017/mydatabase}
    res.json(message);
  });*/

// Get data from MongoDB and post it to another API
app.get('/api2', async (req, res) => {
  const data = await getDataFromMongoDB();
  await postDataToAPI('https://jsonplaceholder.typicode.com/posts', data);
  res.send('Data posted to API');
});


// Create a JSON object with some sample data
const sampleData = {
    name: 'John Doe',
    age: 30
  };
  
  // Save the sample data to the MongoDB database
postDataToMongoDB(sampleData);

app.listen(5000, () => {
  console.log('connection listen on 5000');
});

 console.log(getDataFromMongoDB()) 