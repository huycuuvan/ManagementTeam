const db = require("../models/index");
const getAllMember = (id) => {
  return new Promise(async (resolve, reject) => {
    let members = {};
    try {
      if (id === "ALL") {
        members = await db.Member.findAll({
          raw: true,
        });
      }

      if (id && id !== "ALL") {
        members = await db.Member.findOne({
          where: { id: id },
        });
      }
      resolve(members);
    } catch (error) {
      reject(error);
    }
  });
};

const createNewMember = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Kiểm tra nếu data được truyền vào và có đầy đủ các thuộc tính cần thiết
      if (!data || !data.fullName || !data.memberCode || !data.gender) {
        throw new Error("Dữ liệu đầu vào không hợp lệ");
      }

      const newMember = await db.Member.create({
        fullName: data.fullName,
        birthday: data.birthday,
        memberCode: data.memberCode,
        gender: data.gender,
      });

      resolve(newMember);
    } catch (error) {
      console.error("Lỗi khi tạo thành viên mới:", error);
      reject(error);
    }
  });
};
const deleteMember = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const member = await db.Member.destroy({
        where: { id: id },
      });
      resolve(member);
    } catch (error) {
      reject(error);
    }
  });
};
const editMember = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let member = await db.Member.findOne({
        where: { id: data.id },
        raw: false,
      });
      console.log(data);
      if (member) {
        (member.fullName = data.fullName),
          (member.memberCode = data.memberCode),
          (member.gender = data.gender);
        await member.save();

        resolve({
          errCode: 0,
          messageCode: "success",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getAllMember: getAllMember,
  createNewMember: createNewMember,
  deleteMember: deleteMember,
  editMember: editMember,
};
