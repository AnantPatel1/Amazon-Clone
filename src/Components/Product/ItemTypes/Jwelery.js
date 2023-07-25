import React from "react";
import Product from "../Product";
import styles from "../AvailableProduct.module.css";
import { useProducts } from "../../../Store/ProductContext";

export default function Jwelery({ products }) {
  const product = useProducts();
  const jwelery = product.filter(
    (item) => item.type === "jwelery" && item.id > 5
  );
  // console.log(jwelery);

  const productDivs = [];

  for (let i = 0; i < jwelery.length; i += 3) {
    const productsSlice = jwelery.slice(i, i + 3);
    const productItems = productsSlice.map((item) => (
      <Product
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}
      />
    ));

    productDivs.push(
      <div className={styles.home__row} key={i}>
        {productItems}
      </div>
    );
  }

  return <>{productDivs}</>;
}
