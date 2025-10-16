import express from "express";
import {getHandler, createHandler, updateHandler, deleteHandler} from "../Controllers/getusercontroller.js"

const router = express.Router();

router.get("/users", getHandler);
router.post("/users", createHandler);
router.put("/userupdate", updateHandler);
router.delete("/userdelete", deleteHandler);

export default router;
