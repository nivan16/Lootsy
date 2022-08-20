import { connect } from "react-redux";
import { deleteCartItem, requestCart, updateCartItem } from "../../actions/cart_actions";
import Cart from "./cart";

const mapStateToProps = state => ({
    cart: cartCreator(state.entities.users, state.entities.products, state.cart),
    currentUser: state.entities.users[state.session.currentUserId] 
});

const mapDispatchToProps = dispatch => ({
    requestCart: currentUserId => dispatch(
        requestCart(currentUserId)
    ),
    updateCartItem: (currentUserId, productId, quantity) => dispatch(
        updateCartItem(currentUserId, productId, quantity)
    ),
    deleteCartItem: (currentUserId, productId) => dispatch(
        deleteCartItem(currentUserId, productId)
    )
});

const cartCreator = (users, products, cart) => {
    if(cart === {}) return cart;
    let formedCart = {
        owners: {},
        products: {},
    };

    Object.values(cart).forEach( cartItem => {
        formedCart.products[cartItem.productId] = products[cartItem.productId];
        formedCart.owners[cartItem.productOwnerId] = users[cartItem.productOwnerId];
    });

    return formedCart;
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
