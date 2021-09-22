import React from "react";
import style from "../styles/Contacts.module.css";
import { Row, Col, Divider } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Contacts = () => {
  return (
    <React.Fragment>
      <Row className={style.mainContainer}>
        <Col span={10}>
          <div className={style.container}>
            <p>
              The contact form is temporaraly disabled. Please contact me using
              the details below.
            </p>
            <Divider />
            <p>
              <PhoneOutlined /> <span>(0044) 7908476522</span>
            </p>
            <Divider />
            <p>
              <MailOutlined /> <span>Louisdarius96@yahoo.fr</span>
            </p>
            <Divider />
            <p>
              <InstagramOutlined /> <span>Louis_darius</span>
            </p>
            <Divider />
            <p>
              <GithubOutlined /> <span>Louisdarius</span>
            </p>
            <Divider />
          </div>
        </Col>
        <Col span={14}>
          <div className={style.container}>
            <form>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>

              <input type="submit" value="Submit" disabled />
            </form>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Contacts;
