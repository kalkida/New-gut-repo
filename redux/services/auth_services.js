import axios from "axios";

const API_URL = "http://10.0.2.2:8000/api/users/";

const registers = (fullname,email, phone) => {
    return axios.post(API_URL + "register/", {
      fullname,     
      email, 
      phone,
    }).then(res=>
        console.log("email is verified")
    )
};
export {
  registers
};