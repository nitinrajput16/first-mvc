const routes =require("./wiki.js")
const express=require("express")
const app=express()
const port=3000
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://nr750001:Y0FeyRiVQCWTNLa7@cluster0.rranovl.mongodb.net/?retryWrites=true&w=majority');
  const ringSchema = new mongoose.Schema({
    name: {
        type:String,
        required:"Enter movie Name"
    },
    year: {
        type:Number
    }
  });
  const Ring = new mongoose.model("Ring", ringSchema);

  const ring1 = new Ring({
    name:"The ring",
    year:2002
  });
  const ring2=new Ring({
    name:"THe ring 2",
    year:2005
  });
  await ring2.save();
  console.log("Successfully saved ring");
}

app.use("/wiki",routes)

app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log(`we are working on port:${port}`)
})