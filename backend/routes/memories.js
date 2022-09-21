const router = require("express").Router();
let Memories = require("../models/memories.model");

router.route("/").get((req, res) => {
  Memories.find()
    .then((memories) => res.json(memories))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Memories.findById(req.params.id)
  .then((memory) => res.json(memory))
  .catch((err) => res.status(400).json("Error: " + err))
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

router.route("/delete/:id").delete((req, res) => {
  Memories.findByIdAndDelete(req.params.id)
    .then(() => res.json("Memory deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Memories.findById(req.params.id).then((memories) => {
    memories.username = req.body.username;
    memories.description = req.body.description;
    memories.date = Date.parse(req.body.date);

    memories
    .save()
    .then(() => res.json("Memory update"))
    .catch((err) => res.status(400).json("Error: " + err))
  })
})


module.exports = router;