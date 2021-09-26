import React from "react";
import style from "../styles/Skills.module.css";
import { Tabs, Divider } from "antd";

const Skills = () => {
  const { TabPane } = Tabs;

  return (
    <React.Fragment>
      <h2>My Skills</h2>
      <div className={style.main}>
        <h2> Resume</h2>
        <Tabs defaultActiveKey="1" className={style.main}>
          <TabPane tab={<h3>Web-backend</h3>} key="1">
            <div className={style.container}>
              <p>
                <i>
                  <b>ExpressJS</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>Java Core</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>MySQL</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>MongoDB</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>Mongoose</b>
                </i>
              </p>
              <Divider />
            </div>
          </TabPane>
          <TabPane tab={<h3>Web-frontend</h3>} key="2">
            <div className={style.container}>
              <p>
                <i>
                  <b>ReactJS</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>HTML5</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>SASS</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>CSS3</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>Ant Design</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>Material UI</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>JavaScript (ES6)</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>JQuery</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>Bootstrap4</b>
                </i>
              </p>
              <Divider />
            </div>
          </TabPane>
          <TabPane tab={<h3>Machine Learning</h3>} key="3">
            <div className={style.container}>
              <p>
                <i>
                  <b>MATLAB</b>
                </i>
              </p>
              <Divider />
            </div>
          </TabPane>
          <TabPane tab={<h3>Tools</h3>} key="4">
            <div className={style.container}>
              <p>
                <i>
                  <b>Git & Github</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>Heroku</b>
                </i>
              </p>
              <Divider />
              <p>
                <i>
                  <b>Vercel</b>
                </i>
              </p>
              <Divider />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default Skills;
