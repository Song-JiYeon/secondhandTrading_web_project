const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost:27017/Lab-201820748', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongooseAutoInc.initialize(mongoose.connection);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use('/api', api);

app.listen(3001, () => console.log('Node.js Server is running on port 3001...'));