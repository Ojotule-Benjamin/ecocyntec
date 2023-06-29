import React from "react";
import Hero from "../../components/Hero";
import VisionStatement from "./components/VisionStatement";
import CustomButton from "../../components/CustomButton";
import OurMission from "./components/OurMission";

import Industries from "./components/Industries";
import OurExpertise from "./components/OurExpertise";
import OurProjects from "./components/OurProjects";
import PartnerWithUs from "./components/PartnerWithUs";
import OurWorkCultures from "./components/OurWorkCultures";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div
      className="w-full h-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title="Empowering Energy Solutions for a Sustainable Future"
        description={`ECOCYNTEC Limited, a leading provider of professional engineering services and energy solutions for the upstream,
              midstream, and downstream sectors of the oil and energy industry.
              Established in 2023, we have built a strong reputation in the industry for delivering exceptional results.
              As a limited liability company,
              we are dedicated to providing top-quality engineering services and energy products to our clients.`}
        src={require("../../assets/hero1.png")}
        button={
          <CustomButton
            title="Discover More"
            className="w-28 h-10 md:w-[154px] md:h-[51px] text-xs md:text-base text-white cursor-pointer border-2  border-white"
          />
        }
      />
      <VisionStatement />
      <OurMission />
      <Industries />
      <OurExpertise />
      <OurProjects />
      <OurWorkCultures />
      <PartnerWithUs />
      <Footer />
    </div>
  );
};

export default Home;
