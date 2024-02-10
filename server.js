require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const counselingSessionRouter = require('./routers/counselingRoutes');
const customEmitter = require('./eventEmitter'); // Ensure this path is correct

const app = express();

// Event listeners
customEmitter.on('sessionCreated', (session) => {
  console.log(`New session created: ${session.clientName}`);
});

customEmitter.on('sessionUpdated', (session) => {
  console.log(`Session updated: ${session.clientName}`);
});

customEmitter.on('sessionDeleted', (session) => {
  console.log(`Session deleted: ${session.clientName}`);
});

const mongoDBURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/counseling-sessions`;


mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use('/api/sessions', counselingSessionRouter);

app.use((req, res) => {
  res.status(404).send('The resource you were looking for could not be found.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong on the server.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = app;