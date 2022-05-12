import express from "express";
import verifySignUp from "../middlewares";
import authCtrl from "../controllers/auth.controller";
const router = express.Router();

// router.route("/api/auth/signup").post(
//   [
//     verifySignUp.checkDuplicateUsernameOrEmail,
//     verifySignUp.checkRolesExisted
//   ],
//   authCtrl.signup
// );
router.route("/api/user/auth/signup").post(authCtrl.signup);
router.route("/api/user/auth/signin").post(authCtrl.signin);
router.route("/api/user/auth/resetPassword/:token").post(authCtrl.resetPassword);
router.route("/api/user/auth/sendLinkOfResetPassword").post(authCtrl.sendLinkOfResetPassword);
router.route("/api/user/auth/checkLinkOfResetPassword/:token").get(authCtrl.checkLinkOfResetPassword);

router.route("/api/user/auth/verifyEmail/:token").post(authCtrl.verifyEmail);
router.route("/api/user/auth/sendLinkOfVerifyEmail").post(authCtrl.sendLinkOfVerifyEmail);
router.route("/api/user/auth/changePassword").post(authCtrl.changePassword);

router.route("/api/user/auth/withdrawal").post(authCtrl.withdrawal);


export default router;