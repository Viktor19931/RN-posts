import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import postsReducer from "./reducers/posts_reducer";

const rootReducer = combineReducers({
    statePosts: postsReducer
});

let composeEnhansers = compose;

if (__DEV__) {
    composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhansers(applyMiddleware(thunk)));
};

export default configureStore;

