import express from "express";
import {
  deleteUserByID,
  getUsers,
  insertUser,
  updateUsers,
} from "../models/user/UserModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();

    res.json({
      status: "success",
      message: "here are the users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "user create successfully ",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again later",
        });
  } catch (error) {
    let message = error.message;
    if (message.includes("E11000")) {
      message = "Email Already in Use ";
    }
    res.json({
      status: "error",
      message: message,
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const { _id, password } = req.body;
    const filter = { _id };
    const updateObj = { password };

    const result = await updateUsers(filter, updateObj);

    result?._id
      ? res.json({
          status: "success",
          message: "user updated successfully ",
        })
      : res.json({
          status: "error",
          message: "unable to update user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    console.log(_id);

    const result = await deleteUserByID(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "user delete successfully ",
        })
      : res.json({
          status: "error",
          message: "unable to delete user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

console.log(router);
export default router;
