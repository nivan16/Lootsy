import SessionModal from './session_modal';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signupCurrentUser, loginCurrentUser, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({  
    isOpen: state.modal.isOpen,
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    loginCurrentUser: user => dispatch(loginCurrentUser(user)),
    signupCurrentUser: user => dispatch(signupCurrentUser(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal)