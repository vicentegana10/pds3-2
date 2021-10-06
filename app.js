const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// Routes
const usersRouter = require("./routes/users");
app.use("/", usersRouter);
app.use("/users", usersRouter);

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
