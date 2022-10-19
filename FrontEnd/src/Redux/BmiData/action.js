
import axios from "axios";
import { ADD_DATA_FAILURE, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_SUCCESS } from "../actionTypes";


export const getTodoRequest = () => {
  return {
    type: ADD_DATA_REQUEST,
  };
};
export const getTodoSuccrss = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
export const getTodoFailure = () => {
  return {
    type: GET_DATA_ERROR,
  };
};


export const addTodoRequest=()=>
{
  return {
    type: ADD_DATA_REQUEST,
  };
}

export const addTodoSuccess=(payload)=>
{
  return {
    type: ADD_DATA_SUCCESS,payload
  };
}
export const addTodoFaliue=()=>
{
  return {
    type: ADD_DATA_FAILURE,
  };
}
let token=localStorage.getItem('token')
export const addinTodo= (payload)=>(dispatch)=>
{
  console.log(payload);

    dispatch(addTodoRequest())
  return axios({
    url: "http://localhost:8080/bmi/create",
    method: "post",
    headers: {
      'Authorization': `Bearer ${token}` 
    },
    data:payload,
     
    
  })
    .then((res) => {
       //console.log(res.data),
      dispatch(addTodoSuccess(res.data))
    })
    .catch((err) => {
      console.log(err);
      dispatch(addTodoFaliue());
    });
}

export const getData =  () => (dispatch) => {
  dispatch(getTodoRequest());
 return  axios({url:"http://localhost:8080/bmi/",
 method:"get",
 headers: {
   'Authorization': `Bearer ${token}` 
 },
}).then((res) =>
//console.log(res.data))
dispatch(getTodoSuccrss(res.data)))
    .catch((err) => dispatch(getTodoFailure()));
};

// export const deleteTodos =  (_id) => (dispatch) => {
//   dispatch(getTodoRequest());
//   //console.log(id)
//   return axios({url:`https://mysterious-sea-01854.herokuapp.com/todo/${_id}/delete`,
//     method:"delete",
//     headers: {
//       'Authorization': `Basic ${token}` 
//     }})
//     .then((res) => dispatch(deleteTodoSuccess(res.data)))
//     .catch((err) => dispatch(deleteTodoFaliure()));
// };

// export const updateTodos =  (_id,payload) => (dispatch) => {
//   dispatch(getTodoRequest());
//   //console.log(id)
//   return axios({url:`https://mysterious-sea-01854.herokuapp.com/todo/${_id}/edit`,
//     method:"patch",
//     headers: {
//       'Authorization': `Basic ${token}` 
//     },
//     data:payload
//   })
//     .then((res) => dispatch(deleteTodoSuccess(res.data)))
//     .catch((err) => dispatch(deleteTodoFaliure()));
// };