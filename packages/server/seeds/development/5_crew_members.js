/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('crew_members').del();
  await knex('crew_members').insert([
    { full_name: '', birth_date: '', image_location: '' },
  ]);
};
