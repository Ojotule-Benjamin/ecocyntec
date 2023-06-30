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
    img: require("../../assets/whoWeAre1.png"),
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
    img: require("../../assets/whoWeAre2.png"),
    title: "Engineering",
    titleDesc: ` Our expert team of engineers combines technical excellence with a customer-centric approach to deliver tailored solutions that optimize energy production, 
    enhance operational efficiency, and minimize environmental impact. From conceptualization to execution, 
    we ensure that every project is executed with precision and adherence to the highest quality standards. 
    Experience our cutting-edge engineering services and unlock the full potential of your energy operations.`,
    desc: `At ECOCYNTEC, we understand that engineering plays a vital role in optimizing energy production, 
    improving efficiency, and driving sustainable practices. 
    Our engineers are equipped with deep industry knowledge and technical expertise to design, develop, 
    and implement solutions that meet the highest standards of quality and performance. |
    From the initial concept and feasibility studies to detailed engineering design and execution, we are with you every step of the way. 
    Our engineering services encompass a wide range of disciplines, including mechanical, electrical, civil, structural, and process engineering. 
    We utilize state-of-the-art software tools and cutting-edge technologies to ensure accuracy, precision, and efficiency in our engineering deliverables. |
    Whether you require engineering support for a new project, facility expansion, or process optimization, we have the capabilities to exceed your expectations. 
    Our team collaborates closely with you to understand your specific requirements, goals, and challenges, enabling us to develop customized solutions that maximize productivity, minimize costs, and mitigate risks.
    At ECOCYNTEC, we prioritize sustainability and environmental stewardship in all our engineering endeavors. We integrate eco-friendly practices, energy-efficient designs, 
    and renewable energy solutions to help you achieve your sustainability goals while maintaining operational excellence. |
    
    Partnering with ECOCYNTEC for your engineering needs means gaining access to a wealth of knowledge, experience, and technical proficiency. 
    We are committed to delivering superior results, on time and within budget, while maintaining the highest standards of safety and compliance. |
    
    Experience the power of our engineering services and unlock the potential of your energy projects. 
    Contact us today to discuss how we can collaborate and drive your success in the ever-evolving energy landscape`,
  },
  {
    id: 3,
    img: require("../../assets/whoWeAre3.png"),
    title: "Procurement",
    titleDesc: `By choosing ECOCYNTEC for your procurement needs, you can streamline your supply chain, reduce costs, and mitigate risks associated with procurement activities. 
    Our commitment to excellence and customer satisfaction guarantees that your procurement process is efficient, transparent, and hassle-free.`,
    desc: `At ECOCYNTEC, our procurement experts possess extensive industry knowledge and expertise, allowing us to navigate the complex landscape of sourcing and supply chain management with ease. 
We are committed to understanding your project requirements in detail, including technical specifications, quality standards, and budget constraints, 
to ensure that we procure the right materials, equipment, and services to meet your specific needs. |

Our approach to procurement is rooted in efficiency, cost-effectiveness, and reliability. We leverage our vast network of trusted suppliers, manufacturers, 
and service providers to source high-quality products and services at competitive prices. 
Through strategic negotiations and diligent contract management, we strive to secure favorable terms and conditions that maximize value for your project.
ECOCYNTEC's procurement services cover a broad range of categories, including equipment, machinery, spare parts, consumables, and specialized services. 
Whether you require state-of-the-art technology, reliable components, or specialized expertise, we have the expertise and resources to fulfill your procurement needs. |

As part of our commitment to excellence, we prioritize rigorous quality control measures to ensure that all procured items meet stringent standards and specifications. We conduct thorough supplier evaluations and audits to ensure their reliability and adherence to industry regulations. This meticulous attention to detail guarantees that the products and services we procure on your behalf are of the highest quality and reliability. |`,
  },
  {
    id: 4,
    img: require("../../assets/whoWeAre1.png"),
    title: "Construction",
    titleDesc: `At ECOCYNTEC, we understand the importance of construction in bringing energy projects to life. 
    We offer comprehensive construction services tailored to meet the unique requirements of your project. From concept to completion, 
    we manage every aspect of the construction process, ensuring that your vision becomes a reality.`,
    desc: `Our construction team consists of highly skilled professionals who bring a wealth of expertise and experience to each project. We collaborate closely with you to understand your objectives, specifications, and timeline, allowing us to develop a customized construction plan that aligns with your goals. |
With a focus on safety, quality, and efficiency, we employ industry-leading practices and innovative construction methodologies. We have a track record of successfully delivering construction projects of varying complexities, including facilities, infrastructure, and specialized structures. |

At ECOCYNTEC, we prioritize the seamless coordination of resources, materials, and equipment to ensure timely project execution. Our construction management approach emphasizes effective communication, proactive problem-solving, and strict adherence to project schedules and budgets. |

We believe in fostering strong relationships with our clients, suppliers, and subcontractors. This collaborative approach allows us to build trust, maintain open lines of communication, and deliver construction projects that exceed expectations. |
ECOCYNTEC's construction services encompass site preparation, earthworks, civil works, structural construction, mechanical and electrical installations, and commissioning. Whether you require new construction, renovation, or expansion of energy facilities, our team has the expertise to handle projects of all sizes and complexities. |

By choosing ECOCYNTEC as your construction partner, you can be confident in our ability to deliver exceptional results. We are committed to delivering projects on time, within budget, and to the highest standards of quality, safety, and sustainability. |`,
  },
  {
    id: 5,
    img: require("../../assets/whoWeAre3.png"),
    title: "Installation",
    titleDesc: `At ECOCYNTEC, we understand that proper installation is crucial for the optimal functioning and performance of energy facilities. We offer a comprehensive range of installation services tailored to meet your specific requirements. Whether it's equipment installation, system integration, or infrastructure setup, our team has the expertise to deliver exceptional results.`,
    desc: `Our installation experts are highly skilled and experienced in handling various types of equipment and technologies. We follow industry best practices and adhere to stringent quality standards to ensure that each installation is completed to the highest level of precision and reliability. |

    From meticulous planning and preparation to on-site execution, we take a proactive approach to ensure that installations are carried out efficiently and with minimal disruption. Our team works closely with you to understand your project goals and technical specifications, allowing us to develop a customized installation strategy that meets your needs.
    At ECOCYNTEC, we prioritize safety at every stage of the installation process. We have robust safety protocols in place to protect our personnel, your assets, and the environment. Our team undergoes regular training and follows strict safety guidelines to ensure a secure working environment. |
    
    We are committed to delivering installations that meet your project timelines and budget requirements. Our efficient project management approach, combined with effective coordination and communication, allows us to achieve timely completion without compromising on quality. |
    
    Whether it's the installation of production facilities, pipeline systems, control systems, or any other energy infrastructure, you can trust ECOCYNTEC to deliver exceptional installation services. We pride ourselves on our attention to detail, technical expertise, and dedication to customer satisfaction. |`,
  },
  {
    id: 6,
    img: require("../../assets/whoWeAre1.png"),
    title: "Project Management",
    titleDesc: `At ECOCYNTEC, we understand the critical role that effective project management plays in the success of energy projects. Our project managers possess a deep understanding of the energy industry, coupled with extensive expertise in managing complex projects across the entire energy value chain.`,
    desc: `We understand the complexities and challenges involved in managing energy projects. Our experienced project managers are equipped with the knowledge, skills, and tools to effectively plan, execute, and control projects of various scales and complexities. |
    From the initial project scoping and feasibility assessment to the final project handover, we provide comprehensive project management services tailored to your specific needs. We take a proactive approach, focusing on effective planning, resource allocation, risk management, and stakeholder engagement. |
    
    Our project management team works closely with you to understand your project objectives, timelines, and budget constraints. We employ industry-leading project management methodologies and practices to ensure that your projects are delivered on time, within budget, and to the highest quality standards. |
    
    At ECOCYNTEC, we prioritize effective communication and collaboration. Our project managers act as a central point of contact, facilitating seamless coordination between various project stakeholders, including clients, contractors, suppliers, and regulatory authorities. We maintain open lines of communication, providing regular updates and progress reports to keep you informed every step of the way. |
    
    We are committed to ensuring the success of your projects by leveraging our technical expertise, industry knowledge, and extensive network of resources. Our project management services encompass all aspects of project execution, including procurement, scheduling, cost control, quality management, and risk mitigation. |`,
  },
  {
    id: 7,
    img: require("../../assets/whoWeAre2.png"),
    title: "Asset Integrity & Management",
    titleDesc: `With our asset integrity and management services, we help you identify and mitigate potential risks that could impact the performance and safety of your assets. Our experienced professionals utilize advanced techniques, data analysis, and predictive maintenance strategies to proactively detect and address asset integrity issues.`,
    desc: `At ECOCYNTEC Limited, we take great pride in offering comprehensive Asset Integrity & Management services that go above and beyond in safeguarding your valuable assets. We understand that your assets are the backbone of your operations, and ensuring their integrity is crucial for maintaining operational efficiency, safety, and regulatory compliance. |

    Our experienced team of professionals is dedicated to delivering top-notch asset management solutions tailored to your specific requirements. From initial assessment and risk analysis to ongoing monitoring and maintenance, we cover every aspect of asset integrity throughout their entire lifecycle. |
    We employ advanced technologies and industry-leading practices to identify potential risks, assess their impact, and develop proactive strategies to mitigate them. Our team combines expertise in engineering, data analysis, and asset management to deliver comprehensive solutions that optimize asset performance and minimize downtime. |
    
    Through our Asset Integrity & Management services, we prioritize preventive maintenance, utilizing predictive analytics and condition monitoring techniques to identify early signs of asset degradation. By taking a proactive approach, we help you avoid unexpected failures, optimize maintenance schedules, and extend the lifespan of your assets. |
    
    Additionally, our team ensures that your assets comply with all relevant regulatory requirements, industry standards, and best practices. We provide regular inspections, audits, and compliance assessments to ensure that your assets meet the highest safety and quality standards. |
    
    ECOCYNTEC Limited's commitment to customer satisfaction is at the core of our Asset Integrity & Management services. We strive to build strong partnerships with our clients, working closely with you to understand your unique needs and challenges. Our goal is to deliver tailored solutions that address your specific asset integrity requirements and align with your business objectives.
    By choosing ECOCYNTEC Limited as your trusted partner, you can expect unparalleled expertise, reliability, and commitment to excellence. Our team is driven by a passion for helping you achieve long-term success and optimize the performance of your assets. |`,
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
        <div className="w-full h-full my-10 md:mt-20 flex items-center justify-center gap-10 flex-wrap">
          {serviceData.map((service) => {
            return (
              <div
                className="w-80 h-72 cursor-pointer"
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
