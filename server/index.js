require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const cors = require("cors");
const massive = require("massive");
const port = 3000;
const app = express();
const pc = require("./controllers/products_controller");

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(databaseInstance => app.set("db", databaseInstance))
  .catch(console.log);

app.get("/api/products", pc.getAll);
app.get("/api/product/:id", pc.getOne);
app.put("/api/product/:id", pc.update);
app.post("/api/product", pc.create);
app.delete("/api/product/:id", pc.delete);

app.listen(port, console.log(`Hola Papi, I am listening to port ${port}`));
