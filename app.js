const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");

const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/testlisting", async (req,res)=>{
    let sampleListing = new Listing({
        title : "Aditya",
        description: "by the beach",
        price: 3990,
        location : "Jaipur",
        country: "India",
    });

    await sampleListing.save();
    console.log("sample list added");
    res.send("new list is added successfullly");
})

app.listen(8080,()=>{
    console.log("running on port 8080")
})

app.get("/",(req,res)=>{
    res.send("Hi i am 8080");
})

app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });

})

