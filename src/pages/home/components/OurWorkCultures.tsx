import React from "react";
import {
  Integrity,
  Environmental,
  CustomerCentricity,
  SocialGovernance,
} from "../../../assets/svgs/icon";
import OurWorkCultureCard from "../../../components/OurWorkCultureCard";

const workCultureData = [
  {
    id: 1,
    title: `Integrity`,
    desc: `Integrity is the foundation of our work culture at ECOCYNTEC Limited. 
        We uphold the highest ethical standards in all our interactions and decision-making processes. Trust and transparency are key principles that guide our relationships with clients, partners, and colleagues.`,
    icon: Integrity,
  },
  {
    id: 2,
    title: `Environmental`,
    desc: `Environmental Responsibility is a fundamental value that shapes our work culture. We are dedicated to minimizing our environmental impact and promoting sustainable practices. From incorporating eco-friendly technologies to embracing renewable energy sources, we actively contribute to a greener future.`,
    icon: Environmental,
  },
  {
    id: 3,
    title: `Customer Centricity`,
    desc: `Customer Centricity is at the core of our work culture. We are committed to understanding and meeting the unique needs of our clients. We prioritize exceptional customer service and strive to exceed expectations in every project we undertake. Our focus on customer satisfaction drives us to deliver innovative and tailored solutions.`,
    icon: CustomerCentricity,
  },
  {
    id: 4,
    title: `Social & Governance`,
    desc: `Social & Governance consciousness is an integral part of our work culture. We recognize the importance of social responsibility and believe in giving back to the communities we serve. We are committed to fostering diversity, inclusion, and equal opportunities within our organization and beyond. Good governance practices ensure transparency, accountability, and responsible decision-making.`,
    icon: SocialGovernance,
  },
];

const OurWorkCultures = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-backgroundColor mx-auto mt-0 md:mt-20 px-2 md:px-10">
      <div className=" flex flex-col items-center justify-center md:px-24">
        <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor pb-5">
          Our Work Culture
        </h2>
        <p className=" pb-5 font-CrimsonText font-normal text-[12px] leading-5 md:text-xl text-textColor text-center">
          At ECOCYNTEC Limited, our work culture is characterized by a strong
          commitment to Integrity, Customer Centricity, Environmental
          Responsibility, and Social & Governance consciousness. Join our team
          and be part of a work environment that values these principles,
          promotes collaboration, and empowers you to make a meaningful impact
          in the energy industry.
        </p>
      </div>

      <div className="w-full h-auto flex-col md:flex-row md:flex items-center justify-around md:justify-between md:gap-4 px-0 md:px-24 flex-wrap">
        {workCultureData.map((work) => {
          const Icon = work.icon;
          return (
            <OurWorkCultureCard
              key={work.id}
              title={work.title}
              desc={work.desc}
              icon={<Icon />}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurWorkCultures;
