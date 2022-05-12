import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.email_activate = require("./email_activate.model");

export default db;