import axios from "axios";

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo) 
            .then(response => {
                axios.post("/auth/signup", userInfo)  
                    .then(response => {
                        const {token, user} = response.data
                        localStorage.setItem("token", token)
                        localStorage.setItem("user", JSON.stringify(user))
                        dispatch(authenticate(user))
                    })
                console.log(response.data);
            }).catch(err => {
                console.error(err);
            })
    }
}

export function login(credentials) {  
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                dispatch(authenticate(user))
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export function authenticate(user) {  
    return {
        type: "AUTHENTICATE",
        user // pass the user for storage in Redux store
    }
}
    
export function logout() {  
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: "LOGOUT"
    }
}
    
    
const initialState = {  
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

export default function reducer(state = initialState, action) {  
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":  
            return initialState;   
        default:
            return state;
    }
}


