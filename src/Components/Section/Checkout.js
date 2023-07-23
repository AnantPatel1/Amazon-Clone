import React from "react";
import CheckOutProduct from "../Product/CheckOutProduct";
import { useStateValue } from "../Cart/StateProvider";
import classes from "./Checkout.module.css";
import Subtotal from "../Product/Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello</h3>
          <h2 className={classes.checkout__title}>Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      {basket?.length > 0 && (
        <div className={classes.checkout__right}>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
