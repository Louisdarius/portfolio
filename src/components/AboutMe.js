import React from "react";
import style from "../styles/AboutMe.module.css";

import { Row, Col } from "antd";
import photo from "../photos/profile/me.jpeg";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className={style.main}>
        <h2 className={style.header}> About Me</h2>
        <Row>
          <Col span={7}>
            <img
              src={photo}
              alt=""
              // Style for avatar
              // style={{
              //   verticalAlign: "middle",
              //   width: "270px",
              //   height: "350px",
              //   borderRadius: "50%",
              // }}
              className={style.myImage}
            />
          </Col>
          <Col span={17}>
            <p>
              I am a third year computer science student at the university of
              east london graduating in July 2022. <br />
              I was too attached to technologies from a very young age as I grew
              up having fun with electronic toys and video games. Growing up, I
              was always interested in knowing how computers operate. So, in
              junior and high school, I studied IT where I gained a deeper
              understanding on how different computer system hardware interact
              with each other to work as a unit; and as a takeaway, I assembled
              for the first time, a windows computer with every unit (from
              graphic card to motherboard) detached. I was also familiar with
              basic HTML, CSS, and JavaScript. <br />
              So far in my higher education, I have gained lot of experiences in
              computer programming. I built responsive and scalable web apps
              that delight end-users using MERN (MongoDB, Express, React and
              Node) stack. More importantly, I worked side by side with a senior
              web developer on few live projects.
            </p>
            <h3>Objectives:</h3>
            <p>
              As a proactive third year BSc computer science student, I am
              seeking an entry level position in the IT industry as a web/app
              developer or a similar role where I can work as part of a
              collaborate team to enhance my knowledge as well as helping the
              company grow. Beside development, I am also interested in machine
              learning. I have recently started learning python and machine
              learning with MATLAB.
            </p>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default AboutMe;
