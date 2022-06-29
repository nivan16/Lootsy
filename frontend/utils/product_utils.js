
export const fetchProducts = () => (
    $.ajax({
        method: "GET",
        url: '/api/products'
    })
);

export const fetchProduct = productId => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`
    })
);

export const updateProduct = product => (
    $.ajax({
        method: 'PATCH',
        url: `/api/products/${product.id}`
    })
);

export const deleteProduct = productId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/products/${productId}`
    })
);