const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

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
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

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

app.get("/listings/new", (req,res)=>{
    res.render("listings/new");
})

app.post("/listings",async (req,res)=>{
    const newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
})

app.get("/listings/:id", async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show",{listing});
})

app.get("/listings/:id/edit", async(req,res)=>{
     let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit",{listing});
})

app.put("/listings/:id",async(req,res)=>{
     let {id} = req.params;
     await Listing.findByIdAndUpdate(id,{...req.body.listing});
     res.redirect(`/listings/${id}`);
})

app.delete("/listings/:id",async(req,res)=>{
    let {id} = req.params;
     await Listing.findByIdAndDelete(id,{...req.body.listing});
     res.redirect("/listings");
})