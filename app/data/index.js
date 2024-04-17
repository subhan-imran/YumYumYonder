export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../assets/categories/icons8-pizza-96.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../assets/categories/icons8-hamburger-96.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../assets/categories/icons8-spaghetti-96.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../assets/categories/icons8-takeout-box-96.png"),
  },
  {
    id: 5,
    name: "Fish",
    image: require("../assets/categories/icons8-tropical-fish-96.png"),
  },
  {
    id: 6,
    name: "Drinks",
    image: require("../assets/categories/icons8-tropical-drink-96.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "Soft and Tender Fried Chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: require("../assets/restaurants/n7yx-hero(1).jpg"),
      description: "Hot and Spicy Pizza",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 Second Street",
      star: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Pizza",
          description: "Cheesy Garlic Pizza",
          price: 10,
          image: require("../assets/dishes/images (2).jpeg"),
        },
        {
          id: 2,
          name: "Pizza",
          description: "Chicken Tikka Pizza",
          price: 8.5,
          image: require("../assets/dishes/images (2).jpeg"),
        },
        {
          id: 3,
          name: "Pizza",
          description: "Chicken Fajita Pizza",
          price: 9.5,
          image: require("../assets/dishes/images (2).jpeg"),
        },
      ],
    },
    {
      id: 2,
      name: "Papa Johns",
      image: require("../assets/restaurants/n7yx-hero(1).jpg"),
      description: "Hot and Spicy Pizza",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 Second Street",
      star: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Pizza",
          description: "Cheesy Garlic Pizza",
          price: 10,
          image: require("../assets/dishes/images (2).jpeg"),
        },
        {
          id: 2,
          name: "Pizza",
          description: "Chicken Tikka Pizza",
          price: 8.5,
          image: require("../assets/dishes/images (2).jpeg"),
        },
        {
          id: 3,
          name: "Pizza",
          description: "Chicken Fajita Pizza",
          price: 9.5,
          image: require("../assets/dishes/images (2).jpeg"),
        },
      ],
    },
  ],
};
