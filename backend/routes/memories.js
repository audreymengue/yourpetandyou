const router = require("express").Router();
let Memories = require("../models/memories.model");

router.route("/").get((req, res) => {
  Memories.find()
    .then((memories) => res.json(memories))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newMemories = new Memories({ username, description, date });

  newMemories
    .save()
    .then(() => res.json("Memory added :)"))
    .catch((err) => res.status(400).json("Error " + err));
});


module.exports = router;