import React from "react";
import { useStateValue } from "../Cart/StateProvider";
import classes from "./CheckOutProduct.module.css";

function CheckOutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className={classes.checkoutProduct}>
      <img
        className={classes.checkoutProduct__image}
        src={image}
        alt="checkout_image"
      />

      <div className={classes.checkoutProduct__info}>
        <p className={classes.checkoutProduct__title}>{title}</p>
        <p className={classes.checkoutProduct__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.checkoutProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
