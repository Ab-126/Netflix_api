const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/list");

dotenv.config();
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    console.log(`DB connected successfully with ${mongoose.connection.host}`)
  )
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

const PORT = 8800

app.listen(PORT, () => {
  console.log(`Backend server is running on ${PORT}!`);
});
