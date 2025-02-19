const express = require("express");
const {
  verifyAdminLoginToken,
} = require("../../controllers/admin/admin-auth-controller");
const {
  updateUserProfile,
  deleteUser,
  fetchAllUsers,
  fetchSingleUser,
  blockUser,
  unblockUser,
  deleteRequest,
  completeRequest,
  pendRequest,
} = require("../../controllers/admin/admin-user-controller");
const { validate } = require("../../middlewares/validator");

const router = express.Router();

router.put(
  "/update-user-profile/:id",
  verifyAdminLoginToken,
  updateUserProfile
);
router.put("/block-user/:id", verifyAdminLoginToken, blockUser);
router.put("/unblock-user/:id", verifyAdminLoginToken, unblockUser);

router.delete("/delete-user/:id", verifyAdminLoginToken, deleteUser);
router.get("/fetch-all-users", verifyAdminLoginToken, fetchAllUsers);
router.get("/fetch-single-user/:id", verifyAdminLoginToken, fetchSingleUser);

module.exports = router;
