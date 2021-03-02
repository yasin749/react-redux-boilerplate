import {ACTIONS as POST_ACTIONS} from './postConstants';

/* Utils */
import {generateAsyncAction} from '../reduxUtils';

/* Services */
import postService from '../../services/postService';

const actions = {
    setPosts: (posts) => ({
        type: POST_ACTIONS.SET_POSTS,
        payload: posts,
    }),
    getPosts: (params) => (dispatch, getState) => (
        generateAsyncAction({
            service: postService.fetchPosts,
            params,
        }).then(res => {
            dispatch(actions.setPosts(res.data));
        })
    )
}

export {
    actions
};
