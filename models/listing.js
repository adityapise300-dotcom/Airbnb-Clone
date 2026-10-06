const {BuiltinModules} = require("module");
const mongoose = require('mongoose');
const { type } = require("os");
const Schema = mongoose.Schema;
const DEFAULT_IMG = "https://images.unsplash.com/photo-1786315671401-f09081b7e3a8?q=80&w=1980&auto=format&fit=crop";

const listingschema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
   image: {
    filename: { type: String, default: "listingimage" },
    url: {
        type: String,
        default: DEFAULT_IMG,
        set: (v) => (v === "" ? DEFAULT_IMG : v),
    },
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingschema);
module.exports = Listing;