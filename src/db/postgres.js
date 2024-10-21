import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'rootuser',
  host: 'localhost',
  database: 'qravedb',
  password: 'rootpass',
  port: 5432,
});

// test PostgreSQL connection
export const connectPg = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('+++++++++++++++++++ PostgreSQL connected successfully. Current time:', res.rows[0].now);
  } catch (err) {
    console.error('Error connecting to PostgreSQL:', err);
  }
};


export default pool;

// To run this script and test your PostgreSQL connection,
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error executing query', err.stack);
//   } else {
//     console.log('Connection successful, current time:', res.rows[0].now);
//   }
//   pool.end(); // Closes the connection
// });

// node testPgConnection.js


// Use pool
// import pool from './db/postgres.js';

export async function fetchUsers() {
  try {
    const res = await pool.query('SELECT * FROM public.users');
    console.log(res.rows);
    return res.rows; // This contains the array of user objects
  } catch (err) {
    console.error(err);
    return [];
  }
}


