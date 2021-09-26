import React from "react";
import style from "../styles/Top.module.css";
import topImage from "../photos/top/top.png";
import { Button, Col, Row } from "antd";

const Top = () => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <img src={topImage} alt="topImage" style={{ width: "100%" }} />
        <div className={style.centered}>
          <h1 className={style.title}>Louis Hounvio</h1>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Top;
