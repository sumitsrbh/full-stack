import { addProduct } from "./action";

export default function ProductsPage() {
  return (
    <main>
      <h1>Products</h1>
   <form action={addProduct}>
    <input type="text" name="name" placeholder="Product name" />
    <input type="text" name="quantity" placeholder="Quantity required" />
    <input type="text" name="price" placeholder="price " />
    <input type="text" name="avialibility" placeholder="Available" />
    <div>
    <button type="submit">Add Product</button>
    </div>
   </form>
    </main>
  );
}