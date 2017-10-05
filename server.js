const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use('/', express.static('public'));

app.use(bodyParser.json());


// app.get("/", (request, response) => {
//   response.sendFile(__dirname + '/public/index.html');
// });


app.listen(process.env.PORT || 8080, function() {
    console.log('App running');
})
