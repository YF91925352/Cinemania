/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movie_crew').del();
  await knex('movie_crew').insert([
    { movie_id: 8, crew_member_id: 1, role: 'Actor' },
    { movie_id: 8, crew_member_id: 2, role: 'Actor' },
    { movie_id: 8, crew_member_id: 3, role: 'Actor' },
    { movie_id: 9, crew_member_id: 4, role: 'Actor' },
    { movie_id: 9, crew_member_id: 5, role: 'Actor' },
    { movie_id: 9, crew_member_id: 6, role: 'Director' },
    { movie_id: 10, crew_member_id: 7, role: 'Actor' },
    { movie_id: 10, crew_member_id: 8, role: 'Actor' },
    { movie_id: 10, crew_member_id: 9, role: 'Actor' },
    { movie_id: 11, crew_member_id: 10, role: 'Actor' },
    { movie_id: 11, crew_member_id: 11, role: 'Actor' },
    { movie_id: 11, crew_member_id: 12, role: 'Actor' },
    { movie_id: 11, crew_member_id: 12, role: 'Actor' },
    { movie_id: 12, crew_member_id: 13, role: 'Actor' },
    { movie_id: 12, crew_member_id: 14, role: 'Actor' },
    { movie_id: 12, crew_member_id: 15, role: 'Actor' },
    { movie_id: 12, crew_member_id: 16, role: 'Actor' },
    { movie_id: 12, crew_member_id: 17, role: 'Actor' },
    { movie_id: 12, crew_member_id: 18, role: 'Actor' },
    { movie_id: 12, crew_member_id: 19, role: 'Actor' },
    { movie_id: 12, crew_member_id: 20, role: 'Director' },
    { movie_id: 12, crew_member_id: 21, role: 'Writer' },
    { movie_id: 12, crew_member_id: 22, role: 'Writer' },
    { movie_id: 3, crew_member_id: 23, role: 'Director' },
    { movie_id: 3, crew_member_id: 24, role: 'Writer' },
    { movie_id: 3, crew_member_id: 25, role: 'Actor' },
    { movie_id: 3, crew_member_id: 26, role: 'Actor' },
    { movie_id: 3, crew_member_id: 27, role: 'Actor' },
    { movie_id: 3, crew_member_id: 28, role: 'Actor' },
    { movie_id: 4, crew_member_id: 29, role: 'Director' },
    { movie_id: 4, crew_member_id: 30, role: 'Actor' },
    { movie_id: 4, crew_member_id: 31, role: 'Actor' },
    { movie_id: 4, crew_member_id: 32, role: 'Actor' },
    { movie_id: 5, crew_member_id: 33, role: 'Director' },
    { movie_id: 5, crew_member_id: 34, role: 'Actor' },
    { movie_id: 5, crew_member_id: 35, role: 'Actor' },
    { movie_id: 5, crew_member_id: 36, role: 'Actor' },
    { movie_id: 6, crew_member_id: 37, role: 'Director' },
    { movie_id: 6, crew_member_id: 38, role: 'Actor' },
    { movie_id: 6, crew_member_id: 39, role: 'Actor' },
    { movie_id: 6, crew_member_id: 40, role: 'Actor' },
    { movie_id: 6, crew_member_id: 41, role: 'Actor' },
    { movie_id: 7, crew_member_id: 42, role: 'Director' },
    { movie_id: 7, crew_member_id: 43, role: 'Writer' },
    { movie_id: 7, crew_member_id: 44, role: 'Actor' },
    { movie_id: 7, crew_member_id: 45, role: 'Actor' },
    { movie_id: 7, crew_member_id: 46, role: 'Actor' },
    { movie_id: 7, crew_member_id: 47, role: 'Actor' },
  ]);
};
