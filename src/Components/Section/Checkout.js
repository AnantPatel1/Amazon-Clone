import React from "react";
import classes from "./Checkout.module.css";

import { useStateValue } from "../Cart/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

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
          {/* <h2 className={classes.checkout__title}>Your shopping Basket</h2> */}
        </div>
        {basket.length === 0 ? (
          <h1>This Basket is Empty</h1>
        ) : (
          <h2>This is your basket</h2>
        )}
      </div>

      <div className={classes.checkout__right}></div>
    </div>
  );
}

export default Checkout;
