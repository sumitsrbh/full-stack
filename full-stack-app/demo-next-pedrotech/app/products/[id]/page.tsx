import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}




export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`, 
    {
        // cache: 'force-cache'
        next:{
            revalidate:60
        }
    }
  );
   if(response.status== 404) notFound()
   if(response.status== 500) {throw new Error("failed to fetch product")}
  const product = await response.json();

  return (
    <main>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}