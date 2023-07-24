import React, { Fragment, useEffect, useState } from "react";
import Product from "./Product";
import styles from "./AvailableProduct.module.css";
export default function AvailableProduct() {
  const [Products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://clone-a92df-default-rtdb.firebaseio.com/clone.json"
      );
      const responseData = await response.json();
      console.log(responseData);
      const loadedProducts = [];
      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          type: responseData[key].type,
          rating: responseData[key].rating,
          image: responseData[key].image,
        });
      }
      setProduct(loadedProducts);
    };
    fetchData();
  }, []);
  console.log(Products);
  const mainItem = Products.filter((item) => item.id < 6);
  return (
    <Fragment>
      <div className={styles.home__row}>
        {mainItem
          .filter((item) => item.id % 6 === 0 || item.id % 6 === 1)
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
        {mainItem
          .filter(
            (item) =>
              item.id % 6 === 2 || item.id % 6 === 3 || item.id % 6 === 4
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
        {mainItem
          .filter((item) => item.id % 6 === 5)
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
