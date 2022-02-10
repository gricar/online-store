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

export async function getCartItems() {
  return JSON.parse(localStorage.getItem('cart'));
}

export async function saveCartItem(itemObj) {
  if (!JSON.parse(localStorage.getItem('cart'))) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  const atualCart = await getCartItems();
  const exist = await atualCart.some((item) => item.id === itemObj.id);
  if (exist) {
    const addCountItem = await atualCart.filter((item) => item.id === itemObj.id);
    const newArray = await atualCart.filter((item) => item.id !== itemObj.id);
    addCountItem[0].count += 1;
    const result = [...newArray, addCountItem[0]];
    localStorage.setItem('cart', JSON.stringify(result));
  } else {
    itemObj.count = 1;
    const final = [...atualCart, itemObj];
    localStorage.setItem('cart', JSON.stringify(final));
  }
}
