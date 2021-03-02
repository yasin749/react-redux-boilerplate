import {ACTIONS as POST_ACTIONS} from "./postConstants";

function generateDefaultPostState() {
    return {
        posts: [],
    }
}

function postReducer(state = generateDefaultPostState(), action) {
    let newState;

    switch (action.type) {
        case POST_ACTIONS.SET_POSTS: {
            newState = {
                ...state,
                posts: action.payload,
            }
            break;
        }
        default: {
            newState = state;
        }
    }
    return newState;
}

export {generateDefaultPostState};
export default postReducer;
