// server.js
const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const Event = require('./models/eventModel');
const path = require('path');



// Import the MongoDB connection module
require('./db/conn.js');
/*const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));
*/
app.set("view engine", "hbs");

app.get('/calendar', (req,res)=>{
  res.render('calendar')
})

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('An error occurred while fetching events.');
  }
});

app.post('/events', async (req, res) => {
  const eventData = req.body;

  try {
    const newEvent = new Event(eventData);
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('An error occurred while creating the event.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
