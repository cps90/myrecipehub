import axios from "axios";

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

export function authenticate(user) {  
    return {
        type: "AUTHENTICATE",
        user 
    }
}

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
    }
}

export function logout() {  
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: "LOGOUT"
    }
}
    





let verifyAxios = axios.create();

verifyAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})





export function verify() {
    return dispatch => {
    verifyAxios.get('/profile').then(response => {
        dispatch(authenticate(response.data.user))
    })
}
}


    

    
