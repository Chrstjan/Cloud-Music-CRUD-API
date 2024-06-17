import express from "express";
import UserModel from "../Models/user.Model.js";
export const UserController = express.Router();

UserController.get("/users", async (req, res) => {
  try {
    const data = await UserModel.getAllUsers();
    res.status(200).send(data);
  } catch (error) {
    console.error(`Failed to fetch users: ${error}`);
    res.status(500).send({ error: error.message });
  }
});

UserController.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await UserModel.signUpNewUser(email, password);
    res.status(201).send(result);
  } catch (error) {
    console.error("Failed to sign up user:", error);
    res.status(500).send({ error: error.message });
  }
});

UserController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await UserModel.signInWithEmail(email, password);
    res.status(200).send(data);
  } catch (error) {
    console.error(`Failed to sign in user: ${error}`);
    res.status(500).send({ error: error.message });
  }
});

UserController.put("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { role } = req.body;
  try {
    const data = await UserModel.updateUserRole(userId, role);
    res.status(200).send(data);
  } catch (error) {
    console.error("Failed to update user role:", error);
    res.status(500).send({ error: error.message });
  }
});
