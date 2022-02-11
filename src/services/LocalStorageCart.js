if (!JSON.parse(localStorage.getItem('cart'))) {
  localStorage.setItem('cart', JSON.stringify([]));
}

export function getCartItems() {
  return JSON.parse(localStorage.getItem('cart'));
}

export function saveCartItem(itemObj) {
  const atualCart = getCartItems();
  const exist = atualCart.some((item) => item.id === itemObj.id);
  if (exist) {
    const addCountItem = atualCart.find((item) => item.id === itemObj.id);
    addCountItem.count += 1;
    localStorage.setItem('cart', JSON.stringify(atualCart));
  } else {
    itemObj.count = 1;
    const final = [...atualCart, itemObj];
    localStorage.setItem('cart', JSON.stringify(final));
  }
}

export function removeCartItem(itemObj, removeAll) {
  const atualCart = getCartItems();
  const itemCart = atualCart.find((item) => item.id === itemObj.id);
  if (!removeAll && itemCart.count > 1) {
    itemCart.count -= 1;
    localStorage.setItem('cart', JSON.stringify(atualCart));
  } else {
    const newCart = atualCart.filter((item) => item.id !== itemObj.id);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
}
