const express = require("express");
const router = express.Router();
const menu = require("../model/menu");

router.post("/", async (req, res) => {
  const hostel_ = req.body.hostel;
  const day_ = req.body.day;
  const meal_ = req.body.meal;
  if (hostel_ !== "" && meal_ !== "" && day_ !== "") {
    menu.find({ hostel: hostel_, day: day_, meal: meal_ })
      .then((result) => {
        res
          .status(200)
          .json({
            food: result[0].food,
            complementary1: result[0].complementary1,
            complementary2: result[0].complementary2,
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Error retrieving data");
      });
  }
  else{
    res.status(400).send("Please fill in all required fields")
  }
});
module.exports = router;