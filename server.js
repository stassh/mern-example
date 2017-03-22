const express = require('express');

const app = express();
app.use(express.static('static'));

app.listen(8080, function () {
    console.log('App started on port 8080');
});