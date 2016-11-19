const loginActions = {
    OPEN_LOGIN_DIALOG: 'OPEN_LOGIN_DIALOG',
    CLOSE_LOGIN_DIALOG: 'CLOSE_LOGIN_DIALOG',
    UPDATE_LOGIN_NAME: 'UPDATE_LOGIN_NAME',
    UPDATE_LOGIN_ICON: 'UPDATE_LOGIN_ICON',
    SUBMIT_LOGIN_DIALOG: 'SUBMIT_LOGIN_DIALOG'
};

const createActions = {
    OPEN_CREATE_DIALOG: 'OPEN_CREATE_DIALOG',
    CLOSE_CREATE_DIALOG: 'CLOSE_CREATE_DIALOG',
    UPDATE_CREATE_TEXT: 'CREATE_TEXT_CHANGE',
    SUBMIT_CREATE_DIALOG: 'SUBMIT_CREATE_DIALOG'
};

const feedbackActions = {
    TOGGLE_FEEDBACK_RATING: 'TOGGLE_FEEDBACK_RATING',
    ADD_FEEDBACK: 'ADD_FEEDBACK',
    REMOVE_FEEDBACK: 'REMOVE_FEEDBACK',
    EDIT_FEEDBACK: 'EDIT_FEEDBACK'
};

export default {
    ...loginActions,
    ...createActions,
    ...feedbackActions
};