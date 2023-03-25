// Configuration file example for ts-migrate-mongoose:
// You can also use .env instead of a config file

export default {
  uri: process.env.MIGRATE_MONGO_URI ?? 'mongodb://localhost:27017/express'
  // "collection": "migrations",
  // "migrationsPath": "./migrations",
  // "templatePath": "./migrations/template.ts",
  // "autosync": false
}
