const express = require('express'),
    mongoose = require('mongoose'),
    dataBaseConfig = require('./db/database');

// Connecting MongoDB with Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database connected sucessfully ')
    },
    error => {
        console.log('Could not connected to database : ' + error)
    }
)
// Express settings
const app = express();
// Express Error Handling
app.get('*', (req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});
app.use((error, req, res, next) => {
    // Error gets here
    res.json({
        message: error.message
    });
});

// PORT Set up
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})