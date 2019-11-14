





//const http = require('http');
const express = require('express');
//const itemsRouter = require('./routes/items');
const app = express();
app.use(express.json()); //{id:11 name:'nitin'}

const fs = require('fs');

//app.use('/status', itemsRouter);



app.get('/', function(req, res) {

    res.send('Hello World');
});

app.get('/status',function(req,res){


    let rawdata = fs.readFileSync('./config/metadata.json');
    let metadata = JSON.parse(rawdata);
    

    res.json(
        {
        "myapplication": [
                {
            "version": metadata.version,
            "description": metadata.description,
            "lastcommitsha": "abc57858585"
            }
        ]}
        );
})

const port = 3000;
app.listen(port,function(){
     console.log('API is running at port ',port);
    })