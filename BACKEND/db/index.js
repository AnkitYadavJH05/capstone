import mongoose from "mongoose";
import { config } from "dotenv";


config()
const connection = mongoose.connect(
  "mongodb+srv://ankityadav:Dream11@project.rgjegji.mongodb.net/?retryWrites=true&w=majority&appName=project",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default connection;
