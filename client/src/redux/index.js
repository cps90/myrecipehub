import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getRecipes = () => {
    return dispatch => {
        axios.get('/recipe').then(response => {
            dispatch({
                type: "GET_RECIPES",
                recipe: response.data
            })
        })
    }
}

export const addRecipe = () => {
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


const reducer = (state, action) => {
    switch(action.type) {
        case "GET_RECIPES":
            return action.recipe
        default: 
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)