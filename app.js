const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var itmes=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res) {

  var today = new Date();
  // currentday = today.getDay();
  // var day = "";

  var options = {
    weekday : "long" ,
    day : "numeric" ,
    month : "long"

  };
  var day = today.toLocaleString("en-US", options);





  res.render("list", {
    kindofday: day , newitem : itmes
  });

})


app.post("/",function(req,res){

  var item = req.body.NI;
  itmes.push(item);
  res.redirect("/");
})





app.listen(3001, function(req, res) {
  console.log("server started");
})
