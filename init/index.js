const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}

async function initDB(){
  await Listing.deleteMany();
  await Listing.insertMany(initdata.data);
  console.log("Data was inicialised");
}

initDB();