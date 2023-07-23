import React from "react";
import styles from "./Subtotal.module.css";
import { useStateValue } from "../Cart/StateProvider";
import { getBasketTotal } from "../Cart/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className={styles.subtotal}>
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className={styles.subtotal__gift}>
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
