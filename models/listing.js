const {BuiltinModules} = require("module");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingschema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default: "https://images.unsplash.com/photo-1786315671401-f09081b7e3a8?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v===""? "https://images.unsplash.com/photo-1786315671401-f09081b7e3a8?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        :v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingschema);
module.exports = Listing;