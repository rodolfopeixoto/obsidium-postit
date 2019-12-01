require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@obisidium-postit-ejlrf.mongodb.net/test?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors({
  origin: `${process.env.API_GATEWAY_URL}`
}));
app.use(express.json());
app.use(routes);

app.listen(3002);