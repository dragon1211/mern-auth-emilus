import axios from "axios";
import { API_URL } from "configs/AppConfig";

class UserService{
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem('user'));
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
    localStorage.setItem("user", JSON.stringify(user));
  }

  
  //-----------Identity Management----------//
  async getPersonalInfo(id) {
    return await axios
      .get(`${API_URL}/api/user/get/personal-info?id=${id}`);
  }

  async getPartners(id) {
    return await axios
    .get(`${API_URL}/api/user/get/partners?id=${id}`);
  }

  async updatePersonalInfo(personalObj) {
    return await axios
      .put(`${API_URL}/api/user/update/personal-info`, personalObj)
  }

  async updateNickname(obj) {
    return await axios
      .put(`${API_URL}/api/user/update/nickname`, obj)
  }

  async updateUserAvatar(obj) {
    return await axios
    .put(`${API_URL}/api/user/update/avatar`, obj)
  }

  async updateUserWarrant(obj) {
    return await axios
    .put(`${API_URL}/api/user/update/warrant`, obj)
  }
}

export default new UserService();
