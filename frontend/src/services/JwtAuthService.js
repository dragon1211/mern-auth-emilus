import axios from 'axios';
import { API_URL } from "configs/AppConfig";

const JwtAuthService = {}

JwtAuthService.login = async function(email, password) {
	return await axios
	  .post(`${API_URL}/api/user/auth/signin`, {
	    email,
	    password
	})
}

JwtAuthService.signUp = async function (email, password) {
	return await axios
	.post(`${API_URL}/api/user/auth/signup`, {
		email,
		password
	});
}

  //----------Auth Management---------------//
JwtAuthService.sendLinkOfResetPassword = async function (email) {
	return await axios
	  .post(`${API_URL}/api/user/auth/sendLinkOfResetPassword`, {
	    email
	  })
}
  
JwtAuthService.resetPassword = async function (token, password) {
	return await axios
	.post(`${API_URL}/api/user/auth/resetPassword/${token}`, {
	  password
	});
}
  
JwtAuthService.checkLinkOfResetPassword = async function(token) {
	return await axios
	.get(`${API_URL}/api/user/auth/checkLinkOfResetPassword/${token}`);
}
  
  
JwtAuthService.changePassword = async function(email, password, newPassword) {
	return await axios
	  .post(`${API_URL}/api/user/auth/changePassword`, {
	    email,
	    password,
	    newPassword
	  })
}
  
JwtAuthService.sendLinkOfVerifyEmail = async function (current_email, new_email){
	return await axios.post(`${API_URL}/api/user/auth/sendLinkOfVerifyEmail`, {
	  current_email, new_email
	});
}
  
JwtAuthService.verifyEmail = async function (token) {
	return await axios
	.post(`${API_URL}/api/user/auth/verifyEmail/${token}`);
}
  

export default JwtAuthService