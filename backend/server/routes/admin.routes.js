import express from "express";
import AdminCtrl from "../controllers/admin.controller";
import BankCtrl from "../controllers/bank.controller";
const router = express.Router();

router.route("/api/admin/auth/signin").post(AdminCtrl.adminSignin);
router.route("/api/admin/auth/changePassword").put(AdminCtrl.changePassword)

router.route("/api/admin/update/profile").put(AdminCtrl.updateProfile);
router.route("/api/admin/update/avatar").put(AdminCtrl.updateAvatar);

router.route("/api/admin/update/bankInfo").put(BankCtrl.updateBankInfo);         //Bank Controller
router.route("/api/admin/get/bankInfo/:userID").get(BankCtrl.getBankInfo);

router.route("/api/admin/users/all/get").get(AdminCtrl.getAllUsers);
router.route("/api/admin/users/:id/get").get(AdminCtrl.getUserOne);
router.route("/api/admin/users/:id/set/confirmed/identity").put(AdminCtrl.setConfirmedIdentity);
router.route("/api/admin/users/:id/set/disable").put(AdminCtrl.setDisableAccount);
router.route("/api/admin/users/:id/delete").delete(AdminCtrl.deleteUser);

export default router;