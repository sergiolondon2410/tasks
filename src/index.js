const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tasksdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB connected'))
    .catch(err => console.error(err))

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/tasks', require('./routes/tasks'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server
app.listen(app.get('port'), () => {
    console.log('Server runing on port 3000');
})