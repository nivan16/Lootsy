import * as ProductUtils from "../utils/product_utils";

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = "DELETE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

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

const receiveProductErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

export const requestProducts = () => dispatch => (
    ProductUtils.fetchProducts()
        .then ( 
            products => dispatch(receiveAllProducts(products)),
            err => dispatch(receiveProductErrors(err.responseJSON))
        )
);

export const requestProduct = productId => dispatch => (
    ProductUtils.fetchProduct(productId)
        .then ( 
            product => dispatch(receiveProduct(product)),
            err => dispatch(receiveProductErrors(err.responseJSON))
        )
);

export const createProduct = product => dispatch => (
    ProductUtils.updateProduct(product)
        .then ( 
            product => dispatch(receiveProduct(product)),
            err => dispatch(receiveProductErrors(err.responseJSON))
        )
);

export const updateProduct = product => dispatch => (
    ProductUtils.updateProduct(product)
        .then ( 
            product => dispatch(receiveProduct(product)),
            err => dispatch(receiveProductErrors(err.responseJSON))
        )
);

export const deleteProduct = productId => dispatch => (
    ProductUtils.deleteProduct(productId)
        .then ( 
            () => dispatch(removeProduct(productId)),
            err => dispatch(receiveProductErrors(err.responseJSON))
        )
);