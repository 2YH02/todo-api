const express = require("express");

const db = require("./data/database");
const todosRoutes = require("./routes/todos.routes");
const enableCors = require("./middlewares/cors");

const app = express();

app.use(enableCors);
app.use(express.json());

app.use("/todos", todosRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

db.initDb()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
