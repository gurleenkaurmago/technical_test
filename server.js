const express = require('express');
const app = express();
app.use(express.json()); 

const fs = require('fs');
const ch = require('child_process');


app.get('/', function(req, res) {

    res.send('Hello World');
});

app.get('/status',function(req,res){


    let rawdata = fs.readFileSync('./config/metadata.json');
    let metadata = JSON.parse(rawdata);
    
    ch.exec('git rev-parse HEAD', function(err, stdout) {  //child process to get last commit hash from git
        //console.log('Last commit hash on this branch is:', stdout);
        
        if(err)
        return res.json({"code":500,"msg":err})
        res.json(
            {
            "myapplication": [
                    {
                "version": metadata.version,     // gets version from metadata file
                "description": metadata.description, //gets description from metadata file
                "lastcommitsha": stdout //gets the last commit hash
                }
            ]}
            );
    });

    
})

const port = 3000;
app.listen(port,function(){
     console.log('API is running at port ',port);
    })

    module.exports = app;