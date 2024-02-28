import { connect } from "react-redux";
import { requestProduct } from "../../actions/product_actions";
import { updateCartItem } from "../../actions/cart_actions";
import { openModalActionRequired } from '../../actions/modal_actions'; //session modal
import ProductShow from "./product_show";

const mapStateToProps = (state, ownProps) => ({
    isOpen: state.modal.isOpen,
    product: state.entities.products[ownProps.match.params.id],
    productId: ownProps.match.params.id,
    reviews: state.entities.reviews,
    users: state.entities.users,
    currentUser: state.session.currentUser,
    cart: state.cart 
});

//needs updateCart, request, create, & update Review, 
const mapDispatchToProps = dispatch => ({
    requestProduct: productId => dispatch(requestProduct(productId)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    openModalActionRequired: (modalType) => dispatch(openModalActionRequired(modalType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);