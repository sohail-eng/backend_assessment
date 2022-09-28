// Update with your config settings.


require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.SOCIAL_DB,
      user:     process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_Tenant1_migrations'
    }
  },

};
