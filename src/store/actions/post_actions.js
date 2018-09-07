import {GET_POSTS} from "../types";
import posts from '../../../posts';

export const dispatchPosts = () => {
    return {
        type: GET_POSTS,
        payload: posts
    };
};

export const selectSegment = (segment) => {
    console.log(segment);
    return dispatch => {
        let newPosts;
        newPosts = posts.filter(post => { return post.type === segment });
        if (segment === 'all') newPosts = posts;
        dispatch({
            type: GET_POSTS,
            payload: newPosts
        });
        console.log(newPosts);
    }
};
