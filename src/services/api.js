export async function getCategories() {
  const getCat = fetch('https://api.mercadolibre.com/sites/MLB/categories').then((response) => response.json());
  return getCat;
}

export async function getProductsFromCategoryAndQuery(categoryId) {
  const retGetP = fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`).then((response) => response.json());
  return retGetP;
}
