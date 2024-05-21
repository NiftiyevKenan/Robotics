import React from "react";
import style from "./Latest.module.scss";

const Latest = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.top}>
          <h1>Latest News from our Blog</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={style.bottom}>
          <div className={style.card}>
            <img
              src="https://preview.colorlib.com/theme/robotics/img/b1.jpg"
              alt="Foto"
            />
            <div className={style.btn}>
              <button>Travel</button>
              <button>Life Style</button>
            </div>
            <h5>Portable latest Fashion for young women</h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </span>
            <p>31st January, 2018</p>
          </div>
          <div className={style.card}>
            <img
              src="https://preview.colorlib.com/theme/robotics/img/b1.jpg"
              alt="Foto"
            />
            <div className={style.btn}>
              <button>Travel</button>
              <button>Life Style</button>
            </div>
            <h5>Portable latest Fashion for young women</h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </span>
            <p>31st January, 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
