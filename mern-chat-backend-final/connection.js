const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://miniproject1729:miniproject1729@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, ()=> {
  console.log('connected to mongodb')
})
