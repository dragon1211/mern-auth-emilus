import db from "../models";
import { _IDVERIFY_STATUS } from "../configs/constant";

const User = db.user;

// TODO: add filter, sort, range
const getInfo = (req, res) => {
  User
    .findOne({
      _id: req.query.id
    })
    .exec()
    .then((record) => {
      return res.json(record);
    }).catch(err => {
      return res.status(500).send();
    });
}

const updatePersonalInfo = (req, res) => {
  const updatedUser = {
    personalInfo:{
      name: req.body.name,
      furigana: req.body.furigana,
      phoneNumber: req.body.phoneNumber,
      birthday: req.body.birthday,
      locationProvince: req.body.locationProvince,
      locationCity: req.body.locationCity,
      extra: req.body.extra,
    },
    nickname: req.body.nickname,
    identityVerified: _IDVERIFY_STATUS.default
  };

  User
    .findOneAndUpdate({ _id: req.body._id }, updatedUser, {returnOriginal: false})
    .exec()
    .then(record => {
      return res.send(record);
    })
    .catch(err=>{
      return res.status(500).send({
        message: err.message || "エラーが発生しました!"
      })
    });
}


const updateUserAvatar = (req, res) => {
  const updatedUser = {
    avatar: req.body.avatar
  };
  User
    .findOneAndUpdate({ _id: req.body._id }, updatedUser, {returnOriginal: false})
    .exec()
    .then(record => {
      return res.send(record);
    })
    .catch(err=>{
      return res.status(500).send({
        message: err.message || "エラーが発生しました!"
      })
    });
}



export default {
  getInfo,
  updatePersonalInfo,
  updateUserAvatar,
}