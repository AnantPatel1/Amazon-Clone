import React from "react";
import styles from "./Subtotal.module.css";
import { useStateValue } from "../Cart/StateProvider";
import { getBasketTotal } from "../Cart/reducer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function Subtotal() {
  const [{ basket, user }] = useStateValue();

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className={styles.subtotal}>
      <img
        src="https://amazon-clone3.vercel.app/_next/image?url=%2Fimages%2Fa2.png&w=384&q=75"
        alt="add"
      ></img>
      <p className={styles.icons}>
        <ShoppingCartOutlinedIcon sx={{ transform: "scale(5.5)" }} />
      </p>
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className={styles.subtotal__gift}>
        <input type="checkbox" /> This order contains a gift
      </small>
      <button
        disabled={!user}
        style={{
          backgroundColor: user ? "#007bff" : "#6c757d",
          color: "#fff",
          border: user ? "#007bff" : "#6c757d",
        }}
      >
        {user ? "Proceed to Checkout" : "Sign In to Proceed"}
      </button>
    </div>
  );
}

export default Subtotal;
