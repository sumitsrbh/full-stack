import dotenv from 'dotenv/config'

import express from 'express'
import pool from './config/db.js'
import productsRouter from './routes/products.routes.js'

// dotenv.config()

const app = express()

app.use(express.json())

app.use('/products', productsRouter)

app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1')

    return res.status(200).json({
      status: 'OK',
      database: 'Connected',
    })
  } catch {
    return res.status(500).json({
      status: 'Error',
      database: 'Disconnected',
    })
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
