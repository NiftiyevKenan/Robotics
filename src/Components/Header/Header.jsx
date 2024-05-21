import React from "react";
import style from "./Header.module.scss";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img
            src="https://preview.colorlib.com/theme/robotics/img/logo.png"
            alt="Logo"
          />
        </div>
        <div className={style.navbar}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">Admin Panel</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
          </ul>
        </div>
        <div className={style.bars}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Header;
