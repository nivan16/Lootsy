export const fetchCart = userId => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/cart_items`,
        data: { userId }
    })
);

export const updateCartItem = (cartItem) => (
    $.ajax({
        method: "PATCH",
        url: '/api/cart_item',
        data: cartItem,
    })
);

export const deleteCartItem = (shopperId, productId) => (
    $.ajax({
        method: "DELETE",
        url: '/api/cart_item',
        data: { shopperId, productId }
    })
);