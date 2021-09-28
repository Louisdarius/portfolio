import React from "react";
import solarEnergy from "../photos/projects/solarEnergy.png";
import toDoList from "../photos/projects/toDoList.png";
import covid19 from "../photos/projects/covid19.png";
import contacts from "../photos/projects/contacts.png";
import style from "../styles/Projects.module.css";
import { Row, Col } from "antd";

// const { Meta } = Card;

const Projects = () => {
  return (
    <React.Fragment>
      <h2 className={style.header}> Projects </h2>

      <div className={style.main}>
        <Row>
          <Col span={12} className={style.col}>
            <a
              href=" https://louisdarius.github.io/Solar-Energy"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={solarEnergy}
                alt="Mountains"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
          <Col span={12} className={style.col}>
            <a
              href="https://louisdarius.github.io/To-do-list/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <img src={toDoList} alt="Lights" style={{ width: "100%" }} />{" "}
            </a>
          </Col>
        </Row>

        <Row>
          <Col span={12} className={style.col}>
            <a
              href="https://louis-darius-covid19-client.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <img src={covid19} alt="Nature" style={{ width: "100%" }} />
            </a>
          </Col>
          <Col span={12} className={style.col}>
            <a
              href="https://contact-client.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <img src={contacts} alt="Mountains" style={{ width: "100%" }} />
            </a>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default Projects;
