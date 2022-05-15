import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import dbConfig from "./configs/db.config"
import { FRONT_URL } from './configs/app.config'
import db from "./models"
// routes

import authRoute from "./routes/auth.routes";
import userRoute from "./routes/user.routes";
import adminRoute from "./routes/admin.routes";

require('dotenv').config();

const CURRENT_WORKING_DIR = process.cwd();
var corsOptions = {
  origin: FRONT_URL,
  expose: [
    "WWW-Authenticate",
    "Server-Authorization",
    "Content-Range" // <<--- HERE
  ],
};

const app = express();
app.use(cors(corsOptions));
// parse application/json
app.use(bodyParser.json({limit: '50mb'}));       //max upload request size 50mb
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(express.static(path.join(CURRENT_WORKING_DIR, '../frontend/public')))

app.use(authRoute);
app.use(userRoute);
app.use(adminRoute);

// const mongouri = `mongodb+svr://keike24:Sy6ngN3a@${dbConfig.HOST}:27017/${dbConfig.DB}?retryWrites=true&w=majority`;
const mongouri = `mongodb://${dbConfig.HOST}:27017/${dbConfig.DB}`;
db.mongoose.connect(mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
})
.then(() => {
  console.log("Successfully connect to MongoDB.");
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

