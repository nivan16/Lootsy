import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';
import NavBar from "./nav_bar";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
}); //to display a message of "Sign In" or "Hello, ${name}!"

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal())
});//probably will give it a ui action to dispatch (closing and opening a model being updated through a handle submit)

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps);
export default NavBarContainer(NavBar);