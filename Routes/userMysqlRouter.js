import express from "express";
import db from "../Connections/db.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM users");
    console.log(rows);
    
    res.json(rows);
  } catch {
    res.status(500).json({ error: "Failed to get" });
  }
});


router.post("/users", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "datais  missing" });
  }

  try {
    await db.execute("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});


router.put("/users/:email", async (req, res) => {
  const { email } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "No name" });
  }

  try {
    const [result] = await db.execute("UPDATE users SET name = ? WHERE email = ?", [name, email]);
    res.json({ message: "User updated",result });
  } catch { 
    res.status(500).json({ error: "Failed" });
  }
});

router.delete("/users/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const [result] = await db.execute("DELETE FROM users WHERE email = ?", [email]);
    res.json({ message: "User deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

export default router;
