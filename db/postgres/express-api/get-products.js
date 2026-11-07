// *GET /products?category=Electronics&maxPrice=500&page=1&limit=3

app.get('/products', async (req, res) => {
  try {
    // 1. Extract query parameters
    const { category, maxPrice, page, limit } = req.query

    // 2. Convert query parameters
    const pageNumber = Number(page)
    const limitNumber = Number(limit)
    const maxPriceNumber = Number(maxPrice)

    // 3. Validate pagination
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

    // 4. Validate optional maxPrice
    if (
      maxPrice !== undefined &&
      (!Number.isFinite(maxPriceNumber) || maxPriceNumber < 0)
    ) {
      return res.status(400).json({
        message: 'Invalid price',
      })
    }

    // 5. Calculate offset
    const offset = (pageNumber - 1) * limitNumber

    // 6. Initialize dynamic SQL
    let query = `
      SELECT *
      FROM products
    `

    const values = []
    const conditions = []

    // 7. Add optional category condition
    if (category !== undefined) {
      values.push(category)
      conditions.push(`category = $${values.length}`)
    }

    // 8. Add optional maxPrice condition
    if (maxPrice !== undefined) {
      values.push(maxPriceNumber)
      conditions.push(`price <= $${values.length}`)
    }

    // 9. Append WHERE conditions
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`
    }

    // 10. Add LIMIT placeholder and value
    values.push(limitNumber)
    const limitPlaceholder = `$${values.length}`

    // 11. Add OFFSET placeholder and value
    values.push(offset)
    const offsetPlaceholder = `$${values.length}`

    // 12. Append ORDER BY, LIMIT and OFFSET
    query += ` ORDER BY price ASC, id ASC`
    query += ` LIMIT ${limitPlaceholder} OFFSET ${offsetPlaceholder}`

    // 13. Execute PostgreSQL query
    const result = await pool.query(query, values)

    // 14. Return response
    return res.status(200).json({
      data: result.rows,
      totalReturned: result.rowCount,
    })
  } catch (error) {
    console.error('Error fetching products:', error)

    return res.status(500).json({
      message: 'Internal server error',
    })
  }
})
