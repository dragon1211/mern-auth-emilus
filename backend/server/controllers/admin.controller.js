import bcrypt from "bcryptjs";
import { _IDVERIFY_STATUS } from "../configs/constant";
import db from "../models";

const User = db.user;

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

const getOneOfUser = (req, res) => {
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


const deleteOneOfUser = (req, res) => {
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
  getAllUsers,
  getOneOfUser,
  deleteOneOfUser
}