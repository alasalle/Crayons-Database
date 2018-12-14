const express = require("express");
const knex = require("knex");

const dbConfig = require("./knexfile");

const server = express();
const db = knex(dbConfig.development);

const PORT = 4000;

server.use(express.json());

server.post("/crayons", (req, res) => {
  const crayon = req.body;
  db("crayons")
    .insert(crayon)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: "failed to add crayon" });
    });
});

server.get("/crayons", (req, res) => {
  db("crayons")
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      res.status(500).json({ error: "failed to retrieve crayons" });
    });
});

server.get("/crayons/:id", (req, res) => {
  const { id } = req.params;
  db("crayons")
    .where("id", id)
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      res.status(500).json({ error: "failed to retrieve crayon" });
    });
});

server.put("/crayons/:id", (req, res) => {
  const { id } = req.params;
  const crayon = req.body;
  db("crayons")
    .where("id", id)
    .update(crayon)
    .then(rows => {
      res.status(200).json(rows);
    })
    .catch(err => {
      res.status(500).json({ error: "failed to update crayon" });
    });
});

server.delete("/crayons/:id", (req, res) => {
  const { id } = req.params;
  db("crayons")
    .where("id", id)
    .del()
    .then(rows => {
      res.status(201).json(rows);
    })
    .catch(err => {
      res.status(500).json({ error: "failed to delete crayon" });
    });
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
