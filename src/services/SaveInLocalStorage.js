export function saveInLocalStorage(item) {
  localStorage.setItem('evaluation', JSON.stringify(item));
}

export function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem('evaluation'));
}
