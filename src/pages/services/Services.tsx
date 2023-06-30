import React from "react";
import Hero from "../../components/Hero";
import Partner from "../../components/Partner";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

type serviceDataProps = {
  id: number;
  img: string;
  title: string;
};

const serviceData = [
  {
    id: 1,
    img: require("../../assets/projectImg1.png"),
    title: "Oil, Gas & Produced Water Treatment & Management",
    titleDesc: `At ECOCYNTEC Limited, we specialize in providing comprehensive solutions for oil, gas, and produced water treatment and management. 
    Our expert team combines advanced technologies, industry expertise, 
    and innovative approaches to address the unique challenges faced by the energy industry.`,
    desc: `At ECOCYNTEC Limited, we understand the critical importance of effective oil, gas, 
    and produced water treatment and management in the energy industry. 
    Our specialized services are designed to address the unique challenges faced by operators, 
    ensuring safe and sustainable operations while maximizing productivity. |

    With our deep industry knowledge and technical expertise, 
    we offer comprehensive solutions tailored to your specific needs. 
    From initial assessment and design to implementation and ongoing support, 
    our team works closely with you to develop customized treatment and management strategies. |
    
    Our approach combines advanced technologies, innovative processes, and industry best practices to deliver exceptional results. 
    We employ state-of-the-art equipment and cutting-edge techniques to optimize the separation of oil, gas, and produced water minimizing waste and maximizing resource recovery. 
    We are committed to environmental stewardship, and our solutions prioritize sustainability and compliance with regulatory standards. 
    By implementing efficient treatment methods and utilizing eco-friendly practices, 
    we help you reduce your environmental footprint and contribute to a greener future. |

    We provide engineering and operations support services across various production facilities including but not limited to oil, 
    gas and produced water processing facilities: |

    1. Oil, gas and produced water treatment operations and maintenance services |
    2. Oil and gas early production facilities |
    3. Crude oil dehydration and desalting facilities |
    4. Produced water treatment facilities |
    5. Crude oil evacuation and produced water disposal services |
    6. Natural gas processing facilities |
    7. Sand management |
    8. Equipment leasing and services |
    `,
  },
  {
    id: 2,
    img: require("../../assets/whoWeAre1.png"),
    title: "Engineering",
  },
  {
    id: 3,
    img: require("../../assets/projectImg3.png"),
    title: "Procurement",
  },
  {
    id: 4,
    img: require("../../assets/projectImg1.png"),
    title: "Construction",
  },
  {
    id: 5,
    img: require("../../assets/projectImg2.png"),
    title: "Installation",
  },
  {
    id: 6,
    img: require("../../assets/projectImg1.png"),
    title: "Project Management",
  },
  {
    id: 7,
    img: require("../../assets/projectImg1.png"),
    title: "Asset Integrity & Management",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string, service: serviceDataProps) => {
    navigate(`/services/service/?${id}`, { state: { service } });
  };

  return (
    <div
      className="w-full absolute top-32"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Hero
        title="Services"
        description={`Discover our comprehensive range of exceptional services tailored to meet your specific needs. 
        From professional engineering solutions to energy products and beyond, 
        we are committed to delivering excellence and exceeding your expectations. 
        Explore our diverse offerings below and let us empower your success in the energy industry.`}
        src={require("../../assets/hero1.png")}
      />

      <div className=" flex flex-col items-center justify-center px-4 md:px-6 mt-10">
        <h2 className=" font-CrimsonText font-bold text-2xl md:text-4xl text-primaryColor pb-5">
          Our Core Services
        </h2>
        <p className=" font-CrimsonText font-normal text-[12px] leading-5 md:text-xl text-textColor text-center">
          We deliver best in class energy products , solutions and services
          according to international best practices.
        </p>
        <div className="w-full h-full my-10 md:mt-20 flex items-center justify-around gap-10 flex-wrap">
          {serviceData.map((service) => {
            return (
              <div
                className="w-96 h-72 cursor-pointer"
                key={service.id}
                onClick={() => handleNavigation(`${service.id}`, service)}
              >
                <div className="w-full h-[263px] relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className=" w-full h-full object-cover"
                  />
                  <h2 className=" w-full h-full flex items-center justify-center font-CrimsonText font-bold text-white hover:text-primaryColor text-center text-2xl md:text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-white hover:opacity-70">
                    {service.title}
                  </h2>
                </div>
                <div className=" w-full h-[25px] bg-gradient-to-t from-white to-emerald-700 shadow-md"></div>
              </div>
            );
          })}
        </div>
      </div>

      <Partner />
      <Footer />
    </div>
  );
};

export default Services;
