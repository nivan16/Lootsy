import SessionModal from './session_modal';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    isOpen: state.modal.isOpen
});

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal)