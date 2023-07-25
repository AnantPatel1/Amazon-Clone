import React from "react";
import styles from "./Product.module.css";
import { useStateValue } from "../Cart/StateProvider";
function Product(props) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  function AddToCartHandler() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  }
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{props.title}</p>
        <p className={styles.product__price}>
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className={styles.product__rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={props.image} alt="" />

      <button onClick={AddToCartHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
