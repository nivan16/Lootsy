import * as ReviewUtils from "../utils/review_utils";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    reviewInfo: review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const createReview = review => dispatch => (
    ReviewUtils.createReview(review)
        .then(
            review => dispatch(receiveReview(review)),
            err => dispatch(receiveReviewErrors(err.responseJSON))
        )
);

export const editReview = review => dispatch => (
    ReviewUtils.editReview(review)
        .then(
            review => dispatch(receiveReview(review)),
            err => dispatch(receiveReviewErrors(err.responseJSON))
        )
);

export const deleteReview = review => dispatch => (
    ReviewUtils.deleteReview(review.id)
        .then(
            () => dispatch(removeReview(review.reviewerId)),
            err => dispatch(receiveReviewErrors(err.responseJSON))
        )
);