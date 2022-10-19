
import {
 
  
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "../actionTypes";
const initialState={

bmi:{
    isLoding:false,

    isError:false,
    data:[]
}
}
export const Reducer = (state=initialState, action) => {

  switch (action.type) {

    case GET_DATA_REQUEST: {
      return {
        ...state,
        bmi: {
          isLoading: true,
          isError: false,
          data: [],
        },
      };
    }
       
    case GET_DATA_SUCCESS: {
        return {
          ...state,
          bmi: {
            isLoading: false,
            isError: false,
            data: action.payload,
          },
        };
      }
     
      case GET_DATA_ERROR: {
        return {
          ...state,
          bmi: {
            isLoading: false,
            isError: true,
            Singledata: []
          },
        };
      }
     
   
    default: {
      return { ...state };
    }
  }
};
