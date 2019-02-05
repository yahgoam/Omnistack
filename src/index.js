const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://<yah>:<goo123>@ds123625.mlab.com:23625/omnistack-yahgo', {
    useNewUrlParser : true
});

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

