const ProductList = [
  {
    id: "1",
    title: "product",
    price: 100,
    image: "/images/product.jpg",
  },
  {
    id: "2",
    title: "product",
    price: 100,
    image: "/images/product.jpg",
  },
  {
    id: "3",
    title: "product",
    price: 100,
    image: "/images/product.jpg",
  },
  {
    id: "4",
    title: "product",
    price: 100,
    image: "/images/product.jpg",
  },
];

const getProductData = (id) => {
  const productData = ProductList.find((item) => item.id === id);
  return productData;
};

export { getProductData, ProductList };
