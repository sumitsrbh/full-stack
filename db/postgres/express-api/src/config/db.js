import pg from 'pg'
// import dotenv from 'dotenv'

// dotenv.config()

const { Pool } = pg

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

console.log('Database port:', process.env.DB_PORT)

pool.on('error', (error) => {
  console.error('Unexpected database error:', error)
})

export default pool
