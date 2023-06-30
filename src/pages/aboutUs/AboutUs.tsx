import React from "react";
import Hero from "../../components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "../../components/Footer";
import Partner from "../../components/Partner";

const AboutUs = () => {
  return (
    <div
      className="w-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title="About Us"
        description={`ECOCYNTEC Limited, established in 2023, stands as a prominent industry leader, 
        offering professional engineering services and energy products across the upstream, midstream, 
        and downstream sectors of the oil and energy industry.
         With our comprehensive expertise covering the entire value chain, we specialize in delivering outstanding, 
         customized solutions that precisely align with your unique requirements.`}
        src={require("../../assets/hero1.png")}
      />
      <WhoWeAre />
      <Partner />
      <Footer />
    </div>
  );
};

export default AboutUs;
