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
      <p>This is my Blog built with Gatsby!!!</p>
      <StaticImage
        alt="A picture of coding"
        src="../images/tim_kam.jpg"
        className={spaceImages}
      />

      <StaticImage
        alt="A picture of coding"
        src="../images/coder.jpg"
        className={spaceImages}
      />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
