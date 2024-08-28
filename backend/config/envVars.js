import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
  MONGO_URI: "mongodb+srv://gokul:gokul@cluster0.ifc0nfa.mongodb.net/",
  PORT: process.env.PORT || 5000,
  JWT_SECRET: "my_really_hard_to_decode_secret",
  NODE_ENV: process.env.NODE_ENV,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
};
