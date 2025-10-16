import db from "../Connections/db.js";

export const getHandler = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM users");
    res.json(rows);
  } catch {
    res.status(500).json({ error: "Failed to get" });
  }
};

export const createHandler = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "datais  missing" });
  }

  try {
    await db.execute("INSERT INTO users (name, email) VALUES (?, ?)", [
      name,
      email,
    ]);
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const updateHandler = async (req, res) => {
  const { email, name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "No name" });
  }

  try {
    const [result] = await db.execute(
      "UPDATE users SET name = ? WHERE email = ?",
      [name, email]
    );
    res.json({ message: "User updated", result });
  } catch {
    res.status(500).json({ error: "Failed" });
  }
};

export const deleteHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const [result] = await db.execute("DELETE FROM users WHERE email = ?", [
      email,
    ]);
    res.json({ message: "User deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
