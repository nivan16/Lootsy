export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL_ACTION_REQUIRED = "OPEN_MODAL_ACTION_REQUIRED";

//no backend calls needed here, so I just need to export regular actions
export const openModal = () => ({
    type: OPEN_MODAL
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const openModalActionRequired = (modalType) => ({
    type: OPEN_MODAL_ACTION_REQUIRED,
    modalType
})