import { LOGIN_REQUEST, REGISTER_SUCCESS ,REGISTER_FAIL} from "../Actions/types";

const initialState = {
    isLoggedIn:false,
    fullname: "",
    email: "",
    phone:""
  };
    
  const authreducer = (state = initialState, action) =>{
  
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
              ...state,
              isLoggedIn: true,
            };
        case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
          userData:action.payload,
          error:''
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: true,
          userData:[],
          error:action.payload
        };
      default:
        return state;
    }
  }

  export default authreducer;