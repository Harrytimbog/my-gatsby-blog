// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! My name is Timi and I am a software developer from Nigeria. I
        love soccer, coding and comedy. They call me the Lone wolf for a reason
      </p>
    </main>
  );
};

// Step 3: Export your component
export default AboutPage;
