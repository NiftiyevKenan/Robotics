import React from "react";
import style from "./Features.module.scss";
import { FaUser } from "react-icons/fa";

const Features = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.top}>
          <h1>Some Features that Made us Unique</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={style.bottom}>
          <div className={style.card}>
            <div className={style.container}>
              <div className={style.top}>
                <div className={style.icon}>
                  <FaUser />
                </div>
                <div className={style.text}>
                  <span>Expert Technicians</span>
                </div>
              </div>
              <div className={style.bottom}>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.container}>
              <div className={style.top}>
                <div className={style.icon}>
                  <FaUser />
                </div>
                <div className={style.text}>
                  <span>Expert Technicians</span>
                </div>
              </div>
              <div className={style.bottom}>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.container}>
              <div className={style.top}>
                <div className={style.icon}>
                  <FaUser />
                </div>
                <div className={style.text}>
                  <span>Expert Technicians</span>
                </div>
              </div>
              <div className={style.bottom}>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.container}>
              <div className={style.top}>
                <div className={style.icon}>
                  <FaUser />
                </div>
                <div className={style.text}>
                  <span>Expert Technicians</span>
                </div>
              </div>
              <div className={style.bottom}>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.container}>
              <div className={style.top}>
                <div className={style.icon}>
                  <FaUser />
                </div>
                <div className={style.text}>
                  <span>Expert Technicians</span>
                </div>
              </div>
              <div className={style.bottom}>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.container}>
              <div className={style.top}>
                <FaUser />
                <span>Expert Technicians</span>
              </div>
              <div className={style.bottom}>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
