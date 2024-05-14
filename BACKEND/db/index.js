import mongoose from "mongoose";
import { config } from "dotenv";


config()
const connection = mongoose.connect(
  "mongodb+srv://ankryadav12:Dream11@flixxitproject.emigslu.mongodb.net/?retryWrites=true&w=majority&appName=FlixxitProject",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default connection;
