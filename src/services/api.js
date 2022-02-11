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

export function getCartItems() {
  return JSON.parse(localStorage.getItem('cart'));
}

export function saveCartItem(itemObj) {
  if (!JSON.parse(localStorage.getItem('cart'))) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  const atualCart = getCartItems();
  const exist = atualCart.some((item) => item.id === itemObj.id);
  if (exist) {
    const addCountItem = atualCart.find((item) => item.id === itemObj.id);
    const newArray = atualCart.find((item) => item.id !== itemObj.id);
    addCountItem.count += 1;
    const result = [...newArray, addCountItem];
    localStorage.setItem('cart', JSON.stringify(result));
  } else {
    itemObj.count = 1;
    const final = [...atualCart, itemObj];
    localStorage.setItem('cart', JSON.stringify(final));
  }
}
