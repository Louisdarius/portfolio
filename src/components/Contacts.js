import React from "react";
import style from "../styles/Contacts.module.css";
import { Divider } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Contacts = () => {
  return (
    <React.Fragment>
      <div className={style.row}>
        <div className={style.col4}> ohmogiuh</div>
        <div className={style.col8}> khifhmifu</div>
      </div>
      <div className={style.row}>
        {/* <Row className={style.mainContainer && style.row}> */}

        {/* <Col span={7} className={style.col7}> */}
        <div className={style.col5}>
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
          {/* </Col> */}
        </div>

        <div className={style.col7}>
          {/* <Col span={10} className={style.col10}> */}
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
          {/* </Col> */}
        </div>
      </div>

      {/* </Row> */}
    </React.Fragment>
  );
};
export default Contacts;
