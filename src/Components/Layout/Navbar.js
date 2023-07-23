import React, { Fragment } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
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
            <div className={styles.header__option}>
              <span className={styles.eader__optionLineOne}>Hello Guest</span>
              <span className={styles.header__optionLineTwo}>Sign In</span>
            </div>
          </Link>
          <Link to="/login" className={styles.header_link}>
            <div className={styles.header__option}>
              <span className={styles.eader__optionLineOne}>Returns</span>
              <span className={styles.header__optionLineTwo}>& Orders</span>
            </div>
          </Link>
          <Link to="/login" className={styles.header_link}>
            <div className={styles.header__option}>
              <span className={styles.eader__optionLineOne}>Your</span>
              <span className={styles.header__optionLineTwo}>Prime</span>
            </div>
          </Link>
          <div className={styles.header__optionBasket}>
            <ShoppingCartIcon />
            <span
              className={`${styles.header__optionLineTwo} ${styles.header__basketCount}`}
            >
              0
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
