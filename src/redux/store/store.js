import { createStore } from 'redux'

export const createTweetStateActions = {
    TOGGLE_CREATE_TWEET_MODAL: 'TOGGLE_CREATE_TWEET_MODAL'
}

const initialStateCreateTweetState = { isCreateTweetModalOpen: false }

const { TOGGLE_CREATE_TWEET_MODAL } = createTweetStateActions;

const createTweetReducer = (state = initialStateCreateTweetState, actions) => {
    if (actions.type === TOGGLE_CREATE_TWEET_MODAL) {
        return ({
            isCreateTweetModalOpen: !state.isCreateTweetModalOpen
        })
    }
    return state;
}

export const store = createStore(createTweetReducer)

