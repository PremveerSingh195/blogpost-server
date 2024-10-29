import mongoose from "mongoose";
import app from "./app";
import { DB_NAME } from "./constants";

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

app.listen(PORT, () => {
  console.log(`server is succesfully running on port localhost:${PORT}`);
});
