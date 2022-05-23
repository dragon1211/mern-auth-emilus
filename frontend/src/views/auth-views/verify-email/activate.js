import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import JwtAuthService from "services/JwtAuthService";
import UserService from "services/UserService";
import { message } from "antd";
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

const VerifyEmail = () => {

  const history = useHistory();
  const location = useLocation();
  const _token= new URLSearchParams(location.search).get('verify_token');

  useEffect(()=>{
    JwtAuthService.verifyEmail(_token)
    .then((res) => {
      if(res.data.status_code === 200){
          message.success(res.data.message);
          if( UserService.getCurrentUser() ){
            let user = res.data.user;
            delete user.password;
            UserService.setCurrentUser(user);
            history.push(`/home`);
          } else {
            history.push(`${AUTH_PREFIX_PATH}/login`);
          }
      } else {
            message.error(res.data.message, ()=>{
                  history.push(`${AUTH_PREFIX_PATH}/verify-email`);
            });
      }
    })
    .catch(err => {
      message.error(err.response.data.message, ()=>{
        history.push(`${AUTH_PREFIX_PATH}/verify-email`);
      });
    })
  }, []);

  return null;
}


export default VerifyEmail;