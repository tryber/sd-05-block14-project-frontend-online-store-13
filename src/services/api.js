export async function getCategories() {
  const getCat = fetch('https://api.mercadolibre.com/sites/MLB/categories').then((response) => response.json());
  return getCat;
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  let fetchUrl = '';
  if (categoryId && query) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (query) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else if (!query && categoryId) {
    fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  console.log(fetchUrl);
  return fetch(fetchUrl).then((response) => response.json());
}
