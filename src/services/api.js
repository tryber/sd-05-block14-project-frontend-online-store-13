export async function getCategories() {
  const getCat = fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return getCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let fetchUrl = '';
  if (categoryId && query) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId && !query) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
  } else if (query && !categoryId) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${query}`;
  }
  return fetch(fetchUrl).then((response) => response.json());
}
