import express from "express";
import { MONGODB_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//         origin: 'http:localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['content-type'],
//     })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(201).send("It worked..");
});

app.use("/books", booksRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
