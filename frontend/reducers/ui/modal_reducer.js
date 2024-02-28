import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_ACTION_REQUIRED } from "../../actions/modal_actions";

const _closedModal = { 
    isOpen: false
};

const modalReducer = ( state = _closedModal, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            return { isOpen: true };
        case CLOSE_MODAL:
            return { isOpen: false };
        case OPEN_MODAL_ACTION_REQUIRED:
            return { isOpen: action.modalType };
        default:
            return state;
    };
};

export default modalReducer;