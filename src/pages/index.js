// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my Blog built with Gatsby!!!</p>
      <StaticImage
        alt="The city of Rio de Janeiro"
        src="../images/profile.jpg"
      />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
