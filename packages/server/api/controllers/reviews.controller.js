const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getLatestRatedMovies = async () => {
  return knex('reviews')
    .select(
      'movies.id',
      'movies.image_location',
      'movies.backdrop_URL',
      'movies.title',
      'reviews.rating',
      'reviews.review_text',
      'reviews.created_at',
    )
    .join('movies', 'movies.id', '=', 'reviews.movie_id')
    .orderBy('reviews.created_at', 'desc')
    .limit(8);
};

const getReviewsOfMovieByID = async (id) => {
  if (isNaN(id)) {
    throw new HttpError('ID should be a number', 400);
  }
  try {
    const reviews = await knex('reviews')
      .select(
        'reviews.id',
        'users.full_name',
        'reviews.rating',
        'reviews.review_text',
        'reviews.created_at',
      )
      .join('users', 'users.id', '=', 'reviews.user_id')
      .where('reviews.movie_id', id)
      .orderBy('reviews.created_at', 'desc');
    return reviews;
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
};

const getReviewByIdUid = async (id, uid) => {
  if (isNaN(id)) {
    throw new HttpError('Movie ID should be a number', 400);
  }
  if (!uid) {
    throw new HttpError("The user hasn't logged in", 400);
  }
  try {
    const userReview = knex('reviews as r')
      .select(
        'm.title',
        'm.description',
        'u.id as user_id',
        'u.uid',
        'u.full_name',
        'r.id as reviewID',
        'r.movie_id',
        'r.rating',
        'r.review_text',
        'r.created_at',
      )
      .join('movies as m', 'm.id', '=', 'r.movie_id')
      .join('users as u', 'u.id', '=', 'r.user_id')
      .where('r.movie_id', id)
      .where('u.uid', uid)
      .orderBy('r.created_at', 'desc')
      .limit(9);
    if (userReview.length === 0) {
      return {
        message: `No reviews created by user for the movie`,
      };
    }
    return userReview;
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
const editReview = async (ReviewID, updateReview) => {
  if (!ReviewID) {
    throw new HttpError('review ID should be a number', 400);
  }

  return knex('reviews').where({ id: ReviewID }).update({
    rating: updateReview.rating,
    review_text: updateReview.review_text,
    created_at: moment().format(),
  });
};

const deleteReview = async (ReviewID) => {
  return knex('reviews').where({ id: ReviewID }).del();
};

const createReview = async (body) => {
  try {
    await knex('reviews').insert({
      movie_id: body.movie_id,
      user_id: body.user_id,
      rating: body.rating,
      review_text: body.review_text,
      created_at: moment().format(),
    });

    return {
      statusCode: 201,
      message: 'Review is created successfully',
    };
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
};

module.exports = {
  getLatestRatedMovies,
  getReviewsOfMovieByID,
  getReviewByIdUid,
  editReview,
  deleteReview,
  createReview,
};
