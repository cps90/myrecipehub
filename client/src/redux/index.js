import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import user from './auth'
import axios from 'axios'
import { combineReducers } from 'redux'

let recipeAxios = axios.create();

recipeAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export const getRecipes = () => {
    return dispatch => {
        recipeAxios.get('/recipe').then(response => {
            dispatch({
                type: "GET_RECIPES",
                recipes: response.data
            })
        })
    }
}

export const addRecipe = newRecipe => {
    return dispatch => {
        recipeAxios.post('/recipe', newRecipe).then(response => {
            dispatch(getRecipes())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteRecipe = id => {
    return dispatch => {
        recipeAxios.delete(`/recipe/${id}`).then(response => {
            dispatch(getRecipes())
        }).catch(err => {
            console.log(err)
        })
    }
}

const initialState = {
    recipe: []
}


const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_RECIPES": 
            return {
            ...state,
            recipe: action.recipes
        }
        default: 
            return state
    }
}

const reducer = combineReducers({
    user,
    recipeReducer
});

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)