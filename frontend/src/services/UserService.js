import axios from "axios";
import { API_URL } from "configs/AppConfig";

class UserService{
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem('auth_token'));
    }
    catch (ex) {
      console.log("getCurrentUser ", ex)
      return null
    }
  }

  setCurrentUser(data) {
    let old_user = this.getCurrentUser();
    if(data.password) delete data.password;
    let user = data;
    if(old_user){
      user = {...data, "accessToken": old_user.accessToken}
    }
    localStorage.setItem("auth_token", JSON.stringify(user));
  }

  
  //-----------Identity Management----------//
  async updatePersonalInfo(personalObj) {
    return await axios
      .put(`${API_URL}/api/user/update/personal-info`, personalObj)
  }

  async updateUserAvatar(obj) {
    return await axios
    .put(`${API_URL}/api/user/update/avatar`, obj)
  }
}

export default new UserService();
