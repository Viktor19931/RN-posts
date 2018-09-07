import {GET_POSTS, SELECT_SEGMENT} from "../types";

const INITIAL_STATE = {
    selectedSegment: 'All',
    posts: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case SELECT_SEGMENT:
            return {
                ...state,
                selectedSegment: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
