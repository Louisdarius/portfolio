import React from "react";
import project1 from "../photos/projects/project1.jpeg";
import project2 from "../photos/projects/project2.jpeg";
import project3 from "../photos/projects/project3.jpeg";
import style from "../styles/Projects.module.css";
import { Button } from "antd";

// const { Meta } = Card;

const Projects = () => {
  // const projectList = [
  //   {
  //     title: "COVID 19",
  //     description: "",
  //     imgSrc: "",
  //     link: "https://louis-darius-covid19-client.vercel.app",
  //   },
  //   {
  //     title: "Contacts",
  //     description: "",
  //     imgSrc: "",
  //     link: "https://contact-client.vercel.app",
  //   },
  // ];
  return (
    <React.Fragment>
      {/* <h2> My projects</h2>
      <Image width={200} src="../photos/projects/covid19.jpeg" />
      <ul>
        <li>
          {" "}
          <a href="https://louisdarius.github.io/Solar-Energy/">Solar Energy</a>
        </li>
        <li>
          {" "}
          <a href="https://louisdarius.github.io/To-do-list/">To do list</a>
        </li>
        <li>
          {" "}
          <a href="https://contact-client.vercel.app">Contact</a>
        </li>
        <li>
          {" "}
          <a href="https://louis-darius-covid19-client.vercel.app">Covid-19</a>
        </li>
      </ul>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<EditOutlined key="edit" />]}
      >
        <Meta title="Card title" description="This is the description" />
      </Card>
      , */}

      {/* <!-- MAIN (Center website) --> */}
      <div class={style.main}>
        {/* <!-- Portfolio Gallery Grid --> */}
        <h2>Projects</h2>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.content}>
              <img src={project1} alt="Mountains" style={{ width: "100%" }} />
              <h3>My Work</h3>
              <p>
                Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
                necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor
                sit amet, tempor prodesset eos no.
              </p>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.content}>
              {/* <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" > 
            </Link> */}
              <img src={project1} alt="Lights" style={{ width: "100%" }} />
              <h3>My Work</h3>
              <p>
                Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
                necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor
                sit amet, tempor prodesset eos no.
              </p>
              <Button type="primary"> Visit Site </Button>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.content}>
              <img src={project2} alt="Nature" style={{ width: "100%" }} />
              <h3>My Work</h3>
              <p>
                Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
                necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor
                sit amet, tempor prodesset eos no.
              </p>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.content}>
              <img src={project3} alt="Mountains" style={{ width: "100%" }} />
              <h3>My Work</h3>
              <p>
                Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
                necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor
                sit amet, tempor prodesset eos no.
              </p>
            </div>
          </div>
          {/* <!-- END GRID --> */}
        </div>

        {/* <!-- END MAIN --> */}
      </div>
    </React.Fragment>
  );
};
export default Projects;
