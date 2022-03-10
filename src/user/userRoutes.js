const { Router } = require("express");
const { addUser, login, updatePassword, deleteUser } = require("./userControllers");
const { hashPassword, decrytPassword, checkToken } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", hashPassword, )

module.exports = userRouter;
