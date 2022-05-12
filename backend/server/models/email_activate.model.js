var config = require('../config/config');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

var Email_ActivateSchema = new Schema({
  email: String,
  ttl: Date,
  token: String,
  new_email: String,
  type: String
}, {timestamps:{ createdAt: 'created_at', updatedAt: 'updated_at' }}
).set('toJSON', {
  virtuals: true
});

Email_ActivateSchema.methods.generateVerificationToken = function () {
  const user = this;
  const verificationToken = jwt.sign(
      { ID: user._id },
      config.default.secret_private_key,
      { expiresIn: "7d" }
  );
  return verificationToken;
};

module.exports =  mongoose.model('Email_Activate', Email_ActivateSchema)