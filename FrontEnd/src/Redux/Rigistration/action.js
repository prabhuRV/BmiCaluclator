import axios from "axios";
import { useNavigate } from "react-router-dom";
import { REGISTER_USER, Reg_FAILURE, Reg_SUCCESS } from "../actionTypes";

export const postRegiste = async ({ value, dispatch }) => {

  console.log(value)
  dispatch({
    type: REGISTER_USER,
  });
  return axios({
    url: "https://floating-brushlands-32030.herokuapp.com/user/signup",
    method: "post",
    data: {
     
      name: value.name,
      email: value.email,
      password: value.password,
    
    },
  })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: Reg_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: Reg_FAILURE, payload: err.data.error });
    });
};
