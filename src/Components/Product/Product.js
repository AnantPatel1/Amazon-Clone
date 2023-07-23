import React from "react";
import styles from "./Product.module.css";
import { useStateValue } from "../Cart/StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  function AddToCartHandler() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={AddToCartHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
