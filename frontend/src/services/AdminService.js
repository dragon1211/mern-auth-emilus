import axios from "axios";
import { API_URL } from "configs/AppConfig";

const AdminService = {}

AdminService.getAllUsers = async function(){
      return await axios
      .get(`${API_URL}/api/admin/users/get/all`);
}

AdminService.deleteOneOfUser = async function(userID) {
      return await axios
      .delete(`${API_URL}/api/admin/users/delete/${userID}`);
}


export default AdminService;