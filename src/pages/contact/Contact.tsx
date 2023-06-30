import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div
      className="w-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title="Contact Us"
        description={`Reach out to us today and let's start a conversation about how we can collaborate and assist you with your energy needs. 
        Our dedicated team is ready to provide personalized support and find the best solutions for your business. 
        Fill out the form below or contact us directly to get started. We look forward to hearing from you.`}
        src={require("../../assets/hero1.png")}
      />
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <Footer />
    </div>
  );
};

export default Contact;
