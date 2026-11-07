import express from 'express'
import pool from '../config/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { category, maxPrice, page, limit } = req.query

    // 1. Convert query parameters
    const pageNumber = Number(page ?? 1)
    const limitNumber = Number(limit ?? 10)
    const maxPriceNumber = Number(maxPrice)

    // 2. Validate pagination
    if (
      !Number.isInteger(pageNumber) ||
      pageNumber < 1 ||
      !Number.isInteger(limitNumber) ||
      limitNumber < 1 ||
      limitNumber > 100
    ) {
      return res.status(400).json({
        message: 'Invalid page or limit',
      })
    }

    // 3. Validate optional maxPrice
    if (
      maxPrice !== undefined &&
      (maxPrice.trim() === '' ||
        !Number.isFinite(maxPriceNumber) ||
        maxPriceNumber < 0)
    ) {
      return res.status(400).json({
        message: 'Invalid maxPrice',
      })
    }

    // 4. Calculate offset
    const offset = (pageNumber - 1) * limitNumber

    // 5. Initialize query builder
    let query = `
      SELECT *
      FROM products
    `

    const values = []
    const conditions = []

    // 6. Add optional category filter
    if (category !== undefined) {
      if (category.trim() === '') {
        return res.status(400).json({
          message: 'Invalid category',
        })
      }

      values.push(category)
      conditions.push(`category = $${values.length}`)
    }

    // 7. Add optional price filter
    if (maxPrice !== undefined) {
      values.push(maxPriceNumber)
      conditions.push(`price <= $${values.length}`)
    }

    // 8. Add WHERE conditions
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`
    }

    // 9. Add LIMIT
    values.push(limitNumber)
    const limitPlaceholder = `$${values.length}`

    // 10. Add OFFSET
    values.push(offset)
    const offsetPlaceholder = `$${values.length}`

    // 11. Add sorting and pagination
    query += ` ORDER BY price ASC, id ASC`
    query += ` LIMIT ${limitPlaceholder} OFFSET ${offsetPlaceholder}`

    // 12. Execute PostgreSQL query
    const result = await pool.query(query, values)

    // 13. Return JSON response
    return res.status(200).json({
      data: result.rows,
      pagination: {
        page: pageNumber,
        limit: limitNumber,
        totalReturned: result.rowCount,
      },
    })
  } catch (error) {
    console.error('GET /products error:', error)

    return res.status(500).json({
      message: 'Internal server error',
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const idNumber = Number(req.params.id)

    if (!Number.isInteger(idNumber) || idNumber < 1) {
      return res.status(400).json({
        message: 'Invalid product ID'
      })
    }

    const result = await pool.query(
      'SELECT * FROM products WHERE id = $1',
      [idNumber]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Product not found'
      })
    }

    return res.status(200).json({
      data: result.rows[0]
    })

  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: 'Internal server error'
    })
  }
})

export default router
