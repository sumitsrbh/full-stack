import { useEffect, useMemo } from 'react'

function Products({ category, sort }) {
  //   const filters = {
  //     category,
  //     sort,
  //   }  // original way

  const filters = useMemo(() => ({ category, sort }), [category, sort])
  const fetchProducts = () => {
    console.log('Product being fetched')
  }

  useEffect(() => {
    console.log('Fetching products...')
    fetchProducts(filters)
  }, [filters]) // with every re-render dependency would change without useMemo

 // or  senior level modification 
//  useEffect(() => {
//     console.log('Fetching products...')
//     fetchProducts(filters)
//   }, [category, sort]) 
//  This is often simpler because the effect directly depends on the primitive reactive values it uses.


  return <div>Products</div>
}

export default Products
