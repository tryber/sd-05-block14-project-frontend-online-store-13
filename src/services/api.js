export async function getCategories() {
  const getCat = fetch('https://api.mercadolibre.com/sites/MLB/categories').then((response) => response.json());
  return getCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let fetchUrl = '';
  if (categoryId && query) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  } else if (categoryId) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
  } else if (categoryId === false && query) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${query}`;
  }
  return fetch(fetchUrl).then((response) => response.json());
}
