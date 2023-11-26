import * as ReviewUtils from "../utils/review_utils";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const createReview = review => (
    ReviewUtils.createReview(review)
        .then (
            review => dispatch(receiveReview(review)),
            err => dispatch(receiveReviewErrors(err.responseJSON))
        )
);