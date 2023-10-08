import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';
import { logoutCurrentUser } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const mapStateToProps = ( state, ownProps ) => ({
    currentUser: state.session.currentUser,
    pathname: ownProps.location.pathname,
    query: state.query
}); //to display a message of "Sign In" or "Hello, ${name}!"

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal()),
    logoutCurrentUser: () => dispatch(logoutCurrentUser())
});//probably will give it a ui action to dispatch (closing and opening a model being updated through a handle submit)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);