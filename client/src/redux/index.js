import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import user from './auth'

export const getRecipes = () => {
    return dispatch => {
        axios.get('/recipe').then(response => {
            dispatch({
                type: "GET_RECIPES",
                recipes: response.data
            })
        })
    }
}

export const addRecipe = newRecipe => {
    return dispatch => {
        axios.post('/recipe', newRecipe).then(response => {
            dispatch(getRecipes())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteRecipe = id => {
    return dispatch => {
        axios.delete(`/recipe/${id}`).then(response => {
            dispatch(getRecipes())
        }).catch(err => {
            console.log(err)
        })
    }
}

const initialState = {
    recipe: []
}

const reducer = combineReducers({user});

const reducer = (state = initialState, action) => {
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

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)