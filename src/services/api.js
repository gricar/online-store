export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJson = await categories.json();
  return categoriesJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId && !query) {
    throw new Error('Insira pelo menos um elemento');
  }
  const fetchQueryCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const queryCategoryJson = await fetchQueryCategory.json();
  return (queryCategoryJson);
}

export async function getDetailsFromProductId(productId) {
  const productInfo = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const productInfoJson = await productInfo.json();
  return productInfoJson;
}
