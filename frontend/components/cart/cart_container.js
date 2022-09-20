import { connect } from "react-redux";
import { deleteCart, deleteCartItem, requestCart, updateCartItem } from "../../actions/cart_actions";
import Cart from "./cart";

const mapStateToProps = state => ({
    cart: cartCreator(state.entities.users, state.entities.products, state.cart),
    currentUser: state.entities.users[state.session.currentUserId] 
});

const mapDispatchToProps = dispatch => ({
    requestCart: currentUserId => dispatch(
        requestCart(currentUserId)
    ),
    updateCartItem: cartItem => dispatch(
        updateCartItem(cartItem)
    ),
    deleteCart: shopperId => dispatch(
        deleteCart(shopperId)
    ),
    deleteCartItem: (currentUserId, productId) => dispatch(
        deleteCartItem(currentUserId, productId)
    ),
});

const cartCreator = (users, products, cart) => {
    //jQuery method
    if($.isEmptyObject(cart)) return cart;
    
    let formedCart = {
        owners: {},
        products: {},
    };

    for(const cartItem of Object.values(cart)){
        if(products[cartItem.productId] === undefined) return false;

        
        formedCart.products[cartItem.productId] = products[cartItem.productId];
        formedCart.products[cartItem.productId].quantity = cartItem.quantity;
        formedCart.owners[cartItem.productOwnerId] = users[cartItem.productOwnerId];
    };

    return formedCart;
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
