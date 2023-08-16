const ProductList = [
  {
    id: "1",
    title: "ایرپادز",
    price: 299,
    image: "/images/airpods.jpg",
  },
  {
    id: "2",
    title: "آیپد",
    price: 4999,
    image: "/images/ipad.jpg",
  },
  {
    id: "3",
    title: "مک‌بوک",
    price: 19999,
    image: "/images/macbook.jpg",
  },
  {
    id: "4",
    title: "آیفون",
    price: 49999,
    image: "/images/phone.jpg",
  },
  {
    id: "5",
    title: "هدفون",
    price: 599,
    image: "/images/headphone.jpg",
  },
  {
    id: "6",
    title: "ماوس",
    price: 299,
    image: "/images/mouse.jpg",
  },
  {
    id: "7",
    title: "اپل واچ",
    price: 2999,
    image: "/images/watch.jpg",
  },
  {
    id: "8",
    title: "میکروفون",
    price: 699,
    image: "/images/mic.jpg",
  },
];

const getProductData = (id) => {
  const productData = ProductList.find((item) => item.id === id);
  return productData;
};

export { getProductData, ProductList };
