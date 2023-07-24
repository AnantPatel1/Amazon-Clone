import React, { Fragment } from "react";
import Product from "./Product";
import styles from "./AvailableProduct.module.css";
export default function AvailableProduct() {
  const dummyProducts = [
    {
      id: "1",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    },
    {
      id: "2",
      title:
        "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
      price: 239.0,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
    },
    {
      id: "3",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      id: "4",
      title:
        "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      rating: 5,
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
    {
      id: "5",
      title:
        "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      type: "jewelery",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
    {
      id: "6",
      title:
        "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 1094.98,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    },
  ];
  return (
    <Fragment>
      <div className={styles.home__row}>
        {dummyProducts
          .filter((item) => item.id % 6 === 1 || item.id % 6 === 2)
          .map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
      </div>
      <div className={styles.home__row}>
        {dummyProducts
          .filter(
            (item) =>
              item.id % 6 === 3 || item.id % 6 === 4 || item.id % 6 === 5
          )
          .map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
      </div>
      <div className={styles.home__row}>
        {dummyProducts
          .filter((item) => item.id % 6 === 0)
          .map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
      </div>
    </Fragment>
  );
}
