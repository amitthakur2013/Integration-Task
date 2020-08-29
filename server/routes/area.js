const router = require("express").Router();

const { Area, validateArea } = require("../models/area");
const {City} = require("../models/city");

router.get("/all", async (req, res) => {
  const data = await Area.find().populate("parentCity").exec();
  res.json(data);
  //TODO add CHECK maybe?
});

router.post("/add", (req, res) => {
  const { error } = validateArea(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  City.findOne({cityName:req.body.cityName})
  .then(async (city)=>{
    if(!city) return res.send("city not Found!");
    try{
      const area=new Area({areaName:req.body.areaName,parentCity:city._id, status:req.body.status});
      await area.save();
      res.send(area);
    } catch(err) {
      res.send("Something went Wrong!");
    }
  })
  .catch(err => res.status(400).send("Something went Wrong!!"))

});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  //TODO validate del request

  const data = await Area.findByIdAndDelete(id);
  if (!data)
    return res.status(400).send("no Area with the given id found ");

  res.json(data);
});

module.exports = router;
