const memberService = require("../services/memberService");
const getAllMember = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing query params",
      members: {},
    });
  }
  const members = await memberService.getAllMember(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    members,
  });
};

const handleCreateMember = async (req, res) => {
  await memberService.createNewMember(req.body);
  return res.status(201).json({
    errCode: 0,
    errMessage: "done",
  });
};

const handleDeleteMember = async (req, res) => {
  await memberService.deleteMember(req.query.id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "done",
  });
};

const handleEditMember = async (req, res) => {
  await memberService.editMember(req.body);
  console.log(req.body);
  return res.status(200).json({
    errCode: 0,
    errMessage: "done",
  });
};
module.exports = {
  getAllMember: getAllMember,
  handleCreateMember: handleCreateMember,
  handleDeleteMember: handleDeleteMember,
  handleEditMember: handleEditMember,
};
