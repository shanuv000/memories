import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30", extended: true }));

app.use("/posts", postRoutes);
const CONNECTION_URL =
  "mongodb+srv://shanuv000:shanu9334187630@cluster0.yd4tco7.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
// // rough
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/users", (req, res) => {
//   res.send("Users Page");
// });
// // rough
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindandModify", false);
