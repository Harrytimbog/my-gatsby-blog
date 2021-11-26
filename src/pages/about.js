// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! My name is Timi and I am a software developer from Nigeria. I
        love soccer, coding and comedy. They call me the Lone wolf for a reason
      </p>
      <StaticImage
        alt="A picture of Timilehin Arigbede"
        src="../images/profile.jpg"
      />
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
