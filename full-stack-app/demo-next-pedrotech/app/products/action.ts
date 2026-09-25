"use server";

export async function addProduct(formData: FormData) {
  const productId = formData.get("productId");
  const quantity = formData.get("quantity");
  const address = formData.get("address");
}