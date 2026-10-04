const express = require("express");
const app = express();

const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

app.listen(8080,()=>{
    console.log("running on port 8080")
})

app.get("/",(req,res)=>{
    res.send("Hi i am 8080");
})