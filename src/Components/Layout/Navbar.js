import React, { Fragment } from "react";
import Logo from "../../Assets/amazon_PNG11.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../Cart/StateProvider";
import { auth } from "../Auth/firebase";
export default function Navbar() {
  // const[state, dispatch] = StateProvider();
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  // console.log(basket);

  const handleAuthenticaton = () => {
    if (user) {
      auth
        .signOut()
        .then(() => {
          navigate("/");
        })
        .catch((error) => alert(error.message));
    }
  };
  // const handleAuthenticaton = () => {
  //   if (user) {
  //     auth.signOut();
  //     navigate("/");
  //   }
  // };
  return (
    <Fragment>
      <div className={styles.header}>
        <Link to="/">
          <img className={styles.header__logo} src={Logo} alt="Logo" />
        </Link>
        <div className={styles.header__search}>
          <input className={styles.header__searchInput} type="text" />
          <SearchIcon className={styles.header__searchIcon} />
        </div>

        <div className={styles.header__nav}>
          <Link to={!user && "/login"} className={styles.header_link}>
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
          <Link to="/checkout" className={styles.header_link}>
            <div className={styles.header__optionBasket}>
              <ShoppingCartOutlinedIcon sx={{ transform: "scale(1.5)" }} />
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
