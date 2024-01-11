import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import express from "express";

/* Code for connecting database in the same index.js file

const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
    app.listen(process.en);
  } catch {
    console.error("ERROR.", error);
    throw err;
  }
})();


*/
