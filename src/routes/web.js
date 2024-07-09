const express = require("express");
const memberController = require("../controller/memberController");
const router = express.Router();
const initRouter = (app) => {
  router.get("/api/get-all", memberController.getAllMember);
  router.post("/api/create-member", memberController.handleCreateMember);
  router.delete("/api/delete-member", memberController.handleDeleteMember);
  router.put("/api/edit-member", memberController.handleEditMember);

  return app.use("/", router);
};

module.exports = initRouter;
