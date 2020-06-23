const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8080, () => {
  console.log("Listening on 8080...");
});

/* 
  Notes:
   -- Start up, command to build container from docker image:
    --- docker run -p 5000:8080 ramchaik/simpleweb
   -- Command to build image, (run inside current dir)
    --- docker build -t ramchaik/simpleweb .
*/