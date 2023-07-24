import React, { Fragment } from "react";
import styles from "./Header.module.css";
import Product from "../Product/Product";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../Assets/AF-Unrec-3000._CB600722535_.jpg";
import image2 from "../../Assets/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg";
import image3 from "../../Assets/TallHero_3000X1200_Unrec._CB593464763_.jpg";
import image4 from "../../Assets/BAU_FJ_PC_3000x1200._CB614018780_.jpg";
const Header = () => {
  const dummyProducts = [
    {
      id: "3",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      id: "4",
      title:
        "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      rating: 5,
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
    {
      id: "5",
      title:
        "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
  ];
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
          <div className={styles.home__row}>
            <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>

          <div className={styles.home__row}>
            {dummyProducts.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>

          <div className={styles.home__row}>
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
