import { OPEN_MODAL, CLOSE_MODAL } from "../../actions/modal_actions";

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
        default:
            return state;
    };
};

export default modalReducer;