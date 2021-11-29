// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import {
  spaceImages
} from "./index.module.css";


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>This is my Blog!!!</h2>
      <p>
        Live, love and learn. Try to have so much fun in this life. You can view my
        profile on <a href="https://github.com/harrytimbog">Github</a> and on{" "}
        <a href="https://www.linkedin.com/in/timilehin-arigbede-227449144/">
          LinkedIn
        </a>{" "} or visit the about page to learn more about me.
      </p>

      <StaticImage
        alt="A picture of coding"
        src="../images/tim_kam.jpg"
        className={spaceImages}
      />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
