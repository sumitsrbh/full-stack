SELECT *
FROM products
WHERE price = 500
    AND category = 'electronics'
ORDER BY price
LIMIT 3 OFFSET 0