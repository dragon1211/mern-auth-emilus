import jwt from 'jsonwebtoken';
import path from "path";
import fs from "fs";
import config from "../config/config"

const CURRENT_WORKING_DIR = process.cwd();

class Service{
    saveBase64Image = (uri, path, fileName) => {
        var matches = uri.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
        response = {};
        if (matches.length !== 3) {
          return false;
        }
        response.type = matches[1];
        response.data = new Buffer(matches[2], 'base64');
        let decodedImg = response;
        let imageBuffer = decodedImg.data;
        let type = decodedImg.type;
        let extension = type.replace("image/", "");
        if (!fs.existsSync(path)){
          fs.mkdirSync(path, { recursive: true });
        }
        let fname = `${path}/${fileName}.${extension}`;
        try {
          fs.writeFileSync(fname, imageBuffer, 'utf8');
          return extension;
        } catch (e) {
          console.log(e);
          return false;
        }
    }

    generateGeneralToken = (str) => {
      const verificationToken = jwt.sign(
        { id: str },
        config.secret_private_key,
        { expiresIn: "7d" }
      );
      return verificationToken;
    }

    generateOwnerToken = (str) => {
      const verificationToken = jwt.sign(
        { id: str },
        config.owner_private_key
      );
      return verificationToken;
    }
    
    getPublicPath = (pth) => {
      return path.join(CURRENT_WORKING_DIR, '../frontend/public', pth)
    }
}


export default new Service();