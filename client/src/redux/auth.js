import axios from "axios";

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo) 
            .then(response => {
                //coming back to add functionality
                console.log(response.data);
            }).catch(err => {
                console.error(err);
            })
    }
}