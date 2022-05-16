const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../configs/app.config');
var Schema = mongoose.Schema;

var personalSchema = new Schema({
  name: String,
  furigana: String,
  phoneNumber: String,
  birthday: Date,
  address: String
});

var statusSchema = new Schema({
  sms: { type: Boolean, required: true, default: false },
  emailVerified: { type: Boolean, required: true, default: false },
  identityVerified: { type: Number, required: true, default: -1  },         //1 => verified, 0 => apply now, -1 => no ID 
  actived: { type: Number, required: true, default: 1 },
})


var UserSchema = new Schema({
  nickname: {type: String, default: ""},
  introducer:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},       // Affiliate introducer id
  email: {
    type: String,
    required: true,
    validate: {
      isAsync: true,
      validator: function (value, isValid) {
        const self = this;
        return self.constructor.findOne({ email: value })
          .exec()
          .then(user => {
            if (user) {
              return isValid(false);
            }
            else {
              return isValid(true);
            }

          })
          .catch(err => {
            throw err;
          })
      },
      message: 'このメールアドレスは既に登録されています!'
    },
  },
  password: String,
  avatar: {type: String, default: '/img/user.png'},
  warrant: String,                //証明書
  sms: { type: Boolean, default: false },
  emailVerified: { type: Boolean, default: false },
  identityVerified: { type: Number, default: -1  },         //1 => verified, 0 => apply now, -1 => no ID 
  actived: { type: Number, default: 1 },
  
  personalInfo: personalSchema,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  coins: String,
}, 
{
  timestamps:{ 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
}
}).set('toJSON', {
  virtuals: true
});


UserSchema.methods.generateVerificationToken = function () {
  const user = this;
  const verificationToken = jwt.sign(
      { ID: user._id },
      config.APP_CONFIG.secret_private_key,
      { expiresIn: "7d" }
  );
  return verificationToken;
};

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};



module.exports =  mongoose.model('User', UserSchema)