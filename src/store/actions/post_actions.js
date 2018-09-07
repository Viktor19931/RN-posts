import { GET_POSTS, SELECT_SEGMENT } from "../types";
import posts from '../../../posts';

export const dispatchPosts = () => {
    return {
        type: GET_POSTS,
        payload: posts
    };
};

export const selectSegment = (segment) => {
  return {
      type: SELECT_SEGMENT,
      payload: segment
  }
};
