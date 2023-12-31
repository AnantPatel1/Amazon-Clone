import React from "react";
import CheckOutProduct from "../Product/CheckOutProduct";
import { useStateValue } from "../Cart/StateProvider";
import classes from "./NavbarCartButton.module.css";
import Subtotal from "../Section/Subtotal";
function NavbarCartButton() {
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
          <h2 className={classes.checkout__title}>
            {basket?.length === 0
              ? "Your shopping Basket is empty"
              : "Your Shopping Baket"}
          </h2>

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

export default NavbarCartButton;
