import * as ProductUtils from "../utils/product_utils";

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = "DELETE_PRODUCT";

const receiveAllProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

const removeProduct = productId => ({
    type: REMOVE_PRODUCT,
    productId
});

export const requestProducts = () => dispatch => (
    ProductUtils.fetchProducts()
        .then( products => dispatch(receiveAllProducts(products)))
);

export const requestProduct = productId => dispatch => (
    ProductUtils.fetchProduct(productId)
        .then( product => dispatch(receiveProduct(product)))
);

export const createProduct = product => dispatch => (
    ProductUtils.updateProduct(product)
        .then( product => dispatch(receiveProduct(product)))
);

export const updateProduct = product => dispatch => (
    ProductUtils.updateProduct(product)
        .then( product => dispatch(receiveProduct(product)))
);

export const deleteProduct = productId => dispatch => (
    ProductUtils.deleteProduct(productId)
        .then( () => dispatch(removeProduct(productId)))
);