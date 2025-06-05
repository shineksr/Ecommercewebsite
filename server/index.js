import express, { request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FORNTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev")); // Specify morgan format
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = process.env.PORT || 8080;

app.get("/",(request,response)=>{
  ///server to client
  response.json({
      message :"server is running"+  PORT
  })
})

connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

})

