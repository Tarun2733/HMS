// db.js
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URL
const dbName = 'HMS'; // Replace with your database name

const client = new MongoClient(url);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

function getDatabase() {
  return client.db(dbName);
}

module.exports = {
  connectToMongoDB,
  getDatabase,
};
