import bcrypt from "bcryptjs";
import { _IDVERIFY_STATUS } from "../config/constant";
import db from "../models";

const User = db.user;

const adminSignin = (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email,
    role: "admin"
  })
  .then(user => {
    if (!user) {
      return res.send({ status_code: 400, message: "ログインに失敗しました。" });
    }
    user.comparePassword(req.body.password, function (err, isMatch) {
      if (isMatch && !err) {
        // if user is found and password is right create a token
        var token = user.generateVerificationToken();
        return res.send({
          status_code: 200,
          ...user._doc,
          accessToken: token
        });
      } else {
          return res.send({
            status_code: 401,
            accessToken: null,
            message: "ログインに失敗しました。"
          });
      }
    });
  })
  .catch(err=>{
    if (err.message) {
      let startIdx = err.message.lastIndexOf(':');
      startIdx = startIdx > 0 ? startIdx + 1 : startIdx;
      err.message = err.message.substr(startIdx);
    }
    return res.status(500).send({
      message: err.message || "エラーが発生しました!"
    });
  })
};

const  changePassword = (req, res) => {
  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if (!user) {
      return res.send({ 
        status_code: 404, 
        message: "ユーザーはありません。" 
      });
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.send({
        status_code: 401,
        message: "パスワードが正しくありません!"
      });
    }

    User.updateOne({ email: req.body.email }, {
      password: bcrypt.hashSync(req.body.newPassword, 8)
    })
    .exec()
    .then(() => {
      return res.send({ 
        status_code: 200,
        message: "パスワードを変更しました。" 
      })
    })
    .catch((err)=>{
      return res.status(500).send(err);
    })
  })
  .catch((err)=>{
    return res.status(500).send(err);
  })
}

const updateProfile = (req, res) => {
  const updatedUser = {
    nickname: req.body.nickname,
    avatar: req.body.avatar,
    personalInfo:{
      name: req.body.name,
      furigana: req.body.furigana,
      phoneNumber: req.body.phoneNumber,
      birthday: req.body.birthday
    }
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

const updateAvatar = (req, res) => {
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


//User Management
const getAllUsers = (req, res) => {
  User
    .find({ role: 'user'})
    .sort( { created_at: -1 } )
    .then(data => {
        return res.status(200).json(data);
    })
    .catch(err => {
      return res.status(500).send({ message: 'error'});
    })
}

const getUserOne = (req, res) => {
  User
    .findOne({
      _id: req.params.id, 
      role: 'user'
    })
    .then(data => {
        return res.status(200).json(data);
    })
    .catch(err => {
        return res.status(500).send();
    })
}

const setConfirmedIdentity = (req, res) => {
  User
    .findOneAndUpdate({ 
      _id: req.params.id,
    },{ identityVerified: _IDVERIFY_STATUS.verified }, {returnOriginal: false})
    .then(record => {
        return res.status(200).json(record);
    })
    .catch(err => {
        return res.status(500).send();
    })
}

const setDisableAccount = (req, res) => {
  User
    .findOneAndUpdate({
      _id: req.params.id,
    },{ actived: false }, {returnOriginal: false})
    .then(record => {
        return res.status(200).json(record);
    })
    .catch(err => {
        return res.status(500).send();
    })
}

const deleteUser = (req, res) => {
  User
    .findOneAndDelete({
      _id: req.params.id,
    })
    .then(() => {
      getAllUsers(req, res);
    })
    .catch(err => {
        return res.status(500).send();
    })
}







export default {
  adminSignin,
  changePassword,
  updateProfile,
  updateAvatar,

  getAllUsers,
  getUserOne,
  setConfirmedIdentity,
  setDisableAccount,
  deleteUser
}