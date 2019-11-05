const express = require('express')
const app = express()
const port = 3000

let photoArray=[];
var fs = require("fs");
var contant = "Photos.txt";

    fs.readFile(contant, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
      photoArray=data.split('\n'); 
      console.log(data);
    }
})

       let pagesize=20;
     app.get("/photos/:page/", (req, res) =>{
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      const page=req.url.split("/")[2];
    start=(page-1)*pagesize;
    end=start+ pagesize;
    res.send(photoArray.slice(start,end));
    });
   app.listen(port, () => console.log(`Example app listening on port ${port}!`));

  