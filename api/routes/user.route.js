import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  logout,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/logout", logout);
router.get("/getusers", verifyToken, getUsers);
router.get('/:userId', getUser)

export default router;
