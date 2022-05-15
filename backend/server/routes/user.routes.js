import express from "express";
import verifyToken from "../middlewares";
import userCtrl from "../controllers/user.controller";

const router = express.Router();

router.route("/api/user/get/personal-info").get(userCtrl.getInfo)
router.route("/api/user/update/personal-info").put(userCtrl.updatePersonalInfo)
router.route("/api/user/update/avatar").put(userCtrl.updateUserAvatar)

export default router;