import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import user from './auth'
import recipe from './recipe'

const reducer = combineReducers({
    user,
    recipe
});

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)