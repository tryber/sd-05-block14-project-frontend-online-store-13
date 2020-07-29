export async function getCategories() {
  const getCat = fetch('https://api.mercadolibre.com/sites/MLB/categories').then((response) => response.json());
  return getCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let fetchUrl = '';
  if (categoryId === true && query !== true) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (categoryId !== true && query === true) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else if (categoryId === true && query === true) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  }
  return fetch(fetchUrl).then((response) => response.json());
}
