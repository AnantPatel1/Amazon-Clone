import React from "react";
import Product from "../Product";
import styles from "../AvailableProduct.module.css";
import { useProducts } from "../../../Store/ProductContext";

export default function Men() {
  const product = useProducts();
  const men = product.filter((item) => item.type === "Mens" && item.id > 5);
  // console.log(men);

  const productDivs = [];

  for (let i = 0; i < men.length; i += 3) {
    const productsSlice = men.slice(i, i + 3);
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
