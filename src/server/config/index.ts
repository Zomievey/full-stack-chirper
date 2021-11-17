import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    mysql: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,

    },
    port: parseInt(process.env.PORT, 10),
}