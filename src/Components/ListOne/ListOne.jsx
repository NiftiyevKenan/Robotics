import React from "react";
import style from "./ListOne.module.scss";

const ListOne = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.text}>
          <h1>Improved Production level with Robotics</h1>
          <p>EVERYONE WANTS THE INNOVATIONS THROUGH ROBOTICS</p>
          <button>WIEW DETAILS</button>
        </div>
        <div className={style.image}>
          <img
            src="https://preview.colorlib.com/theme/robotics/img/banner-img.png"
            alt="Robot"
          />
        </div>
      </div>
    </div>
  );
};

export default ListOne;
