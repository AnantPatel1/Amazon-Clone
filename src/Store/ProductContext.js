import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [Products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://clone-a92df-default-rtdb.firebaseio.com/clone.json"
        );
        const responseData = await response.json();
        // console.log(responseData);
        const loadedProducts = [];
        for (const key in responseData) {
          loadedProducts.push({
            id: key,
            title: responseData[key].title,
            price: responseData[key].price,
            type: responseData[key].type,
            rating: responseData[key].rating,
            image: responseData[key].image,
          });
        }
        setProduct(loadedProducts);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={Products}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
