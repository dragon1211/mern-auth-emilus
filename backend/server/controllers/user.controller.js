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
    identityVerified: _IDVERIFY_STATUS.default
  };

  User
    .findOneAndUpdate({ _id: req.body.id }, updatedUser, {returnOriginal: false})
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

const updateNickname = (req, res) => {
  const updatedUser = {
    nickname: req.body.nickname
  };
  User
    .findOneAndUpdate({ _id: req.body.id }, updatedUser, {returnOriginal: false})
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
    .findOneAndUpdate({ _id: req.body.id }, updatedUser, {returnOriginal: false})
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

const updateUserWarrant = (req, res) => {
  const updatedUser = {
    warrant: req.body.warrant,
    identityVerified: _IDVERIFY_STATUS.applying
  };
  User
    .findOneAndUpdate({ _id: req.body.id }, updatedUser, {returnOriginal: false})
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

// Affiliant 
const getPartners = async (req, res) => {
  let arr = [{ "_id": req.query.id }];
  let tear1 = await getPartner(arr);
  let tear2 = await getPartner(tear1);
  let tear3 = await getPartner(tear2);
  let tear4 = await getPartner(tear3);
  let tear5 = await getPartner(tear4);
  res.json({
    "tear1": tear1,
    "tear2": tear2,
    "tear3": tear3,
    "tear4": tear4,
    "tear5": tear5
  })
}

const getPartner = async (records) => {
  let ids = [];
  for(let x in records){
    ids.push(records[x]._id);
  }
  return await User
  .find({"introducer": ids})
  .exec()
  .then(res => {
    let temp = [];
    for(let y in res){
      temp.push(res[y]._doc);
    }
    return temp;
  })
}


export default {
  getInfo,
  updatePersonalInfo,
  updateNickname,
  updateUserAvatar,
  updateUserWarrant,
  getPartners,
}