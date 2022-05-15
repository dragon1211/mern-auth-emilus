import express from "express";
import AdminCtrl from "../controllers/admin.controller";
const router = express.Router();

router.route("/api/admin/users/get/all").get(AdminCtrl.getAllUsers);
router.route("/api/admin/users/get/:id").get(AdminCtrl.getOneOfUser);
router.route("/api/admin/users/delete/:id").delete(AdminCtrl.deleteOneOfUser);

export default router;