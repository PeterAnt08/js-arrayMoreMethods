function getPopularCategories(products) {
  const filtered = products.filter(product => product.sales > 5);
  const sorted = filtered.sort((a, b) => b.sales - a.sales);
  const categories = sorted.map(product => product.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
}

module.exports = getPopularCategories;
