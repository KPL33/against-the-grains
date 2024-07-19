import { Sequelize } from "sequelize";
import { config } from "dotenv";

// Load environment variables from .env file
config();

// Create Sequelize instance based on environment
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: parseInt(process.env.DB_PORT, 10) || 3306, // Use environment variable or default to 3306
      }
    );

export default sequelize;
