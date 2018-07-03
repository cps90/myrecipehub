import axios from 'axios'
const recipeAxios = axios.create()

recipeAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const SET_RECIPES = "SET_RECIPES";
const recipeUrl = '/recipe';

function setRecipes(recipe) {
    return {
        type: SET_RECIPES,
        recipe
    }
}

export function getRecipes() {
    return dispatch => {
        recipeAxios.get(recipeUrl).then(response => {
            dispatch(setRecipes(response.data));
        }).catch(err => {
            console.log(err);
        })
    }
}

export function addRecipe(recipe) {
    return dispatch => {
        recipeAxios.post(recipeUrl, recipe)
            .then(response => {
                dispatch(getRecipes());
            })
            .catch(err => {
                console.error(err);
            })
    }
}


export function editRecipe(id, recipe) {
    return dispatch => {
        recipeAxios.put(recipeUrl + id, recipe)
            .then(response => {
                dispatch(getRecipes());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function deleteRecipe(id) {
    return dispatch => {
        recipeAxios.delete(recipeUrl + id)
            .then(response => {
                dispatch(getRecipes());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

const initialRecipes = [];

export default function recipeReducer(recipes = initialRecipes, action) {
    switch(action.type) {
        case "SET_RECIPES":
            return [...action.recipes]
        default: 
            return recipes
    }
}