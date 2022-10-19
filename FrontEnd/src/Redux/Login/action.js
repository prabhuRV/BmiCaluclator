import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER } from "../actionTypes";

export const postLogi = async ({ value, dispatch}) => {
 //  console.log(value)
  // console.log(dispatch);
 dispatch({
   type: LOGIN_USER,
 });
 return axios({
   url: "https://mysterious-sea-01854.herokuapp.com/user/login",
   method: "post",
   data: {
    
    email: value.email,
      password: value.password
     
   },
 })
 .then((res) => {

  dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
})
.catch((err) => {
  console.log(err);
  dispatch({ type: LOGIN_FAILURE, payload: err.data.error });
});
};
