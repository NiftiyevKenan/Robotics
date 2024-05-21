import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import ListOne from "../../Components/ListOne/ListOne";
import axios from "axios";
import ProductCard from "../../Components/Card/ProductCard/ProductCard";
import style from "./Home.module.scss";
import Features from "../../Components/Features/Features";
import Latest from "../../Components/Latest/Latest";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios.get("https://dummyjson.com/products?limit=4").then((res) => {
      setProduct(res.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <ListOne />
      <div className={style.cards}>
        <div className={style.container}>
          {product && product.map((item) => <ProductCard item={item} />)}
        </div>
      </div>
      <Features/>
      <Latest/>
      <Footer/>
    </div>
  );
};

export default Home;
