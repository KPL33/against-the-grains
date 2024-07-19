import path from "path";
import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
config({ path: path.resolve(__dirname, "../../.env") });

// Extract environment variables
const {
  DB_NAME = "default_db_name",
  DB_USER = "default_user",
  DB_PASSWORD = "default_password",
  DB_HOST = "localhost",
  DB_PORT = 3306,
  JAWSDB_URL,
} = process.env;

// Create Sequelize instance
const sequelize =
  process.env.NODE_ENV === "production" && JAWSDB_URL
    ? new Sequelize(JAWSDB_URL, {
        dialect: "mysql",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      })
    : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: parseInt(DB_PORT, 10),
        dialect: "mysql", // Hardcode 'mysql' for clarity
      });

export default sequelize;
