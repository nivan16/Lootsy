export const fetchCart = userId => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/cart_items`,
        data: { userId }
    })
);

export const updateCartItem = (userId, productId) => (
    $.ajax({
        method: "UPDATE",
        url: '/api/cart_item',
        data: {
            userId,
            productId
        }
    })
);

export const deleteCartItem = (userId, productId) => (
    $.ajax({
        method: "DELETE",
        url: '/api/cart_item',
        data: {
            userId,
            productId
        }
    })
);