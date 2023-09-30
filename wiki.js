const express =require("express")
var router = express.Router()
const re=/ab+c/

router.get("/", function (req, res) {
    res.send("Wiki home page");
});
  
router.get("/about", function (req, res) {
    res.send("About this wiki");
});
router.get("/add",(req,res)=>{
    res.json(re)
})
  
module.exports = router;

