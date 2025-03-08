import env from 'dotenv';

env.config({path: '.env'});

const development = {
    database : process.env.DB_DATABASE,  
    username : process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }

export default development;