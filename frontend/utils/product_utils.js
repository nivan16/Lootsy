
//Note: in the below request, a passed object
// is used so that the backend can more safely
// test if the parameters has the key of
// category or not, and return the correct data
export const fetchProducts = (params) => {
    
    debugger
    //lol

    return (
    $.ajax({
        method: "GET",
        url: '/api/products',
        data: params
    })
)};

export const fetchProduct = productId => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`
    })
);

export const createProduct = product => (
    $.ajax({
        method: 'POST',
        url: '/api/products',
        data: { product }
    })
)

export const updateProduct = product => (
    $.ajax({
        method: 'PATCH',
        url: `/api/products/${product.id}`,
        data: { product }
    })
);

export const deleteProduct = productId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/products/${productId}`
    })
);