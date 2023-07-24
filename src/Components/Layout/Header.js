import React, { Fragment } from "react";
import styles from "./Header.module.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../Assets/AF-Unrec-3000._CB600722535_.jpg";
import image2 from "../../Assets/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg";
import image3 from "../../Assets/TallHero_3000X1200_Unrec._CB593464763_.jpg";
import image4 from "../../Assets/BAU_FJ_PC_3000x1200._CB614018780_.jpg";
import AvailableProduct from "../Product/AvailableProduct";
import Jwelery from "../Product/ItemTypes/Jwelery";
const Header = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <div>
          <Carousel className={styles.Carousel}>
            <Carousel.Item>
              <img
                src={image1}
                alt="Header_Image"
                className={styles.header__image}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image2}
                alt="Header_Image"
                className={styles.header__image}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image3}
                alt="Header_Image"
                className={styles.header__image}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image4}
                alt="Header_Image"
                className={styles.header__image}
              />
            </Carousel.Item>
          </Carousel>
          <AvailableProduct />
          <img
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c98e98b6-8989-4e0c-b64e-de0a128254ce._CR0%2C0%2C3000%2C600_SX1920_.jpg"
            alt="jwelery"
            className={styles.jwelery_banner}
          />
          <Jwelery />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
