import React from "react";
import Product from "../Product";
import { Fragment } from "react";
import styles from "../AvailableProduct.module.css";
import { useProducts } from "../../../Store/ProductContext";
export default function Jwelery({ products }) {
  const product = useProducts();
  const jwelery = product.filter(
    (item) => item.type === "jwelery" && item.id > 5
  );
  console.log(jwelery);
  return (
    <Fragment>
      <div className={styles.home__row}>
        {jwelery
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
        {jwelery
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
        {jwelery
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
