require('dotenv').config();

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  logging: false,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  migrations: [
    `${process.env.DB_PATH}/migrations/**/*`
  ],
  entities: [
    `${process.env.DB_PATH}/entities/**/*`
  ],
  cli: {
    entitiesDir: `${process.env.DB_PATH}/entities`,
    migrationsDir: `${process.env.DB_PATH}/migrations`,
  }
}