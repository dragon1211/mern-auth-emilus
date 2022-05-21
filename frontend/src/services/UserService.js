import axios from "axios";
import { API_URL } from "configs/AppConfig";

const UserService = {};

UserService.getCurrentUser = function() {
    try {
      return JSON.parse(localStorage.getItem('auth_token'));
    }
    catch (ex) {
      console.log("getCurrentUser ", ex)
      return null
    }
}

UserService.setCurrentUser = function (data) {
    let old_user = this.getCurrentUser();
    if(data.password) delete data.password;
    let user = data;
    if(old_user){
      user = {...data, "accessToken": old_user.accessToken}
    }
    localStorage.setItem("auth_token", JSON.stringify(user));
}

  
  //-----------Profile Management----------//
UserService.updatePersonalInfo = async function(personalObj) {
    return await axios
      .put(`${API_URL}/api/user/update/personal-info`, personalObj)
}

UserService.updateUserAvatar = async function(obj) {
    return await axios
    .put(`${API_URL}/api/user/update/avatar`, obj)
}

export default UserService;
