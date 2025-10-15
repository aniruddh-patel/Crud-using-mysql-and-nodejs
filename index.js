import express from "express";
import userRouter from "./Routes/userMysqlRouter.js"

const app = express();
app.use(express.json());

app.use("/api/v1",userRouter)

app.listen(4000, () => {
  console.log("server started");
});
