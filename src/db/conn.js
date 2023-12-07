const mongoose = require("mongoose");

const atlasConnectionUri = 'mongodb+srv://tarun:passwd123@hms.jgrogpq.mongodb.net/HMS';

mongoose.connect(atlasConnectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});
