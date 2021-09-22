import React from "react";
import style from "../styles/Resume.module.css";
import { Tabs, Divider } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";

const Resume = () => {
  const { TabPane } = Tabs;

  return (
    <React.Fragment>
      <div className={style.main}>
        <h2> Resume</h2>
        <Tabs defaultActiveKey="1" className={style.main}>
          <TabPane tab={<h3>Education</h3>} key="1">
            <div className={style.container}>
              {/* <h2>Education </h2> */}
              <ul className={style.responsiveTable}>
                <li className={style.tableHeader}>
                  <div className={(style.col, style.col1)}>Year</div>
                  <div className={(style.col, style.col2)}>Institution</div>
                </li>
                <li className={style.tableRow}>
                  <div className={(style.col, style.col1)} data-label="Year">
                    2019 - Present
                  </div>
                  <div
                    className={(style.col, style.col2)}
                    data-label="Institution"
                  >
                    <a
                      href="https://www.uel.ac.uk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      University Of East London{" "}
                    </a>
                  </div>
                </li>
                <li className={style.tableRow}>
                  <div className={(style.col, style.col1)} data-label="Year">
                    2015 - 2017{" "}
                  </div>
                  <div
                    className={(style.col, style.col2)}
                    data-label="Institution"
                  >
                    <a
                      href="https://www.southessex.ac.uk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      South Essex College{" "}
                    </a>
                  </div>
                </li>
                <li className={style.tableRow}>
                  <div className={(style.col, style.col1)} data-label="Year">
                    2012 - 2014{" "}
                  </div>
                  <div
                    className={(style.col, style.col2)}
                    data-label="Institution"
                  >
                    <a
                      href="https://www.chasehigh.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chase High College{" "}
                    </a>
                  </div>
                </li>
                <li className={style.tableRow}>
                  <div className={(style.col, style.col1)} data-label="Year">
                    2011 - 2012
                  </div>
                  <div
                    className={(style.col, style.col2)}
                    data-label="Institution"
                  >
                    <a
                      href="https://southend-adult.ac.uk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Southend Adult Community College{" "}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </TabPane>
          <TabPane tab={<h3>Certificates</h3>} key="2">
            <div className={style.container}>
              <p>
                <span>
                  {" "}
                  <FileDoneOutlined />
                </span>
                Machine learning with{" "}
                <i>
                  <b>MATLAB</b> @ <b> University of East London</b>
                </i>
              </p>
              <Divider />
              <p>
                <span>
                  {" "}
                  <FileDoneOutlined />
                </span>
                MOS(<b>M</b>icrosoft <b>O</b>ffice <b>S</b>pecialist) @{" "}
                <i>
                  <b> University of East London</b>
                </i>
              </p>
              <Divider />
              <p>
                <span>
                  {" "}
                  <FileDoneOutlined />
                </span>
                Level3 Diploma ICT Professional Competence @{" "}
                <i>
                  <b> South essex College</b>
                </i>
              </p>
              <Divider />

              <p>
                <span>
                  {" "}
                  <FileDoneOutlined />
                </span>
                CCNA Exploration: Network Fundamentals @{" "}
                <i>
                  <b> South Essex College</b>
                </i>
              </p>
              <Divider />
              <p>
                <span>
                  {" "}
                  <FileDoneOutlined />
                </span>
                IT Essentials @{" "}
                <i>
                  <b> South Essex College</b>
                </i>
              </p>
              <Divider />
              <p>
                <span>
                  {" "}
                  <FileDoneOutlined />
                </span>
                <b>GCSE </b> English & French @{" "}
                <i>
                  <b> Chase High School</b>
                </i>
              </p>
              <Divider />
              <p>
                <span>
                  {" "}
                  <FileDoneOutlined />
                </span>
                <b>GCSE </b> Maths @{" "}
                <i>
                  <b> South Essex College</b>
                </i>
              </p>
            </div>

            <Divider />
          </TabPane>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default Resume;
