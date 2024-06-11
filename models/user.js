const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "blood":String,
        "mobile":String,
        "adr":String,
        "pin":String,
        "dis":String,
        "place":String,
        "email":String,
        "uname":String,
        "pass":String
    }
)
let usermodel=mongoose.model("users",schema);
module.exports={usermodel}