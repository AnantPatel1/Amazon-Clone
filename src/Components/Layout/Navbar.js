import React, { Fragment } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Cart/StateProvider";
// import { auth } from "../Auth/firebase";
export default function Navbar() {
  // const[state, dispatch] = StateProvider();
  const [{ basket, user }] = useStateValue();
  console.log(basket);

  const handleAuthenticaton = () => {
    // if (user) {
    //   auth.signOut();
    // }
  };
  return (
    <Fragment>
      <div className={styles.header}>
        <img
          className={styles.header__logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />

        <div className={styles.header__search}>
          <input className={styles.header__searchInput} type="text" />
          <SearchIcon className={styles.header__searchIcon} />
        </div>

        <div className={styles.header__nav}>
          <Link to="/login" className={styles.header_link}>
            <div
              onClick={handleAuthenticaton}
              className={styles.header__option}
            >
              <span className={styles.header__optionLineOne}>
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className={styles.header__optionLineTwo}>
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/" className={styles.header_link}>
            <div className={styles.header__option}>
              <span className={styles.eader__optionLineOne}>Returns</span>
              <span className={styles.header__optionLineTwo}>& Orders</span>
            </div>
          </Link>
          <Link to="/" className={styles.header_link}>
            <div className={styles.header__option}>
              <span className={styles.eader__optionLineOne}>Your</span>
              <span className={styles.header__optionLineTwo}>Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className={styles.header_link}>
            <div className={styles.header__optionBasket}>
              <ShoppingCartIcon />
              <span
                className={`${styles.header__optionLineTwo} ${styles.header__basketCount}`}
              >
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
