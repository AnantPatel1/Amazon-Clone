import Product from "./Product";
import styles from "./AvailableProduct.module.css";
import { useProducts } from "../../Store/ProductContext";
import { Fragment } from "react";
export default function AvailableProduct() {
  const product = useProducts();
  const mainItem = product.filter((item) => item.id < 6);
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
