import React, { lazy } from "react";
import webBanner from "../assets/images/web-banner-landing.jpg";
import vid from "../assets/vids/banner.mp4";
import appBanner from "../assets/images/app-banner-landing.jpg";
import SubHeading from "../components/SubHeading";
import {
  appDevelopmentServices,
  chatbotServices,
  customSoftwareServices,
  webDevelopmentServices,
} from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import csdaboutimage from "../assets/images/landingpage/csd.jpg";
import chatbotdevelopment from "../assets/images/landingpage/chatbotdevelopment.jpg";
import ReactPlayer from "react-player";
import WhyChooseUs2 from "../components/WhyChooseUs2";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage2 = ({ page }) => {
  const isCsd = Boolean(page === "custom-software-development");
  let services;
  if (page === "custom-software-development") {
    // banner = webBanner;
    services = customSoftwareServices;
  } else {
    // banner = appBanner;
    services = chatbotServices;
  }
  console.log(services, "asdfjkasdf");
  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen banner relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/30">
          {/* <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/60 via-[#ffffffb5] to-background/60"> */}
          {/* <img
          loading="lazy"
          src={banner}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        /> */}

          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-white font-semibold block sm:inline">
                Brainways Tech
              </span>
            </p>
            <h1 className="heading-1 whitespace-pre-line capitalize">
              {isCsd
                ? "Transforming Businesses with Tailored Software Solutions"
                : "Revolutionizing Conversational Experiences with AI-Powered Chatbots"}
            </h1>
            <p className="sub-heading max-w-6xl mx-auto">
              {isCsd
                ? "'Empowering Your Vision, Enhancing Your Growth' - Unlock the full potential of your business with Brainwaystech's bespoke custom software development services."
                : "'Converse, Engage, Convert' - Transform your customer interactions, streamline support, and propel business growth with Brainwaystech's cutting-edge chatbot development services."}
            </p>
          </div>
        </div>
        <ReactPlayer
          url={vid}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </section>
      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isCsd ? csdaboutimage : chatbotdevelopment}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={
                  isCsd ? "Custom Software Development" : "Chatbot Development"
                }
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isCsd ? csdaboutimage : chatbotdevelopment}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isCsd
                  ? "Tailored Software Solutions for Your Business Needs"
                  : "Intelligent Chatbots for Seamless Customer Interactions"}
              </h2>
              <p className="desc">
                {isCsd
                  ? "Custom software development is all about creating solutions that fit your unique business requirements. Whether you need a robust enterprise application, a scalable SaaS platform, or a custom CRM, we deliver software that drives efficiency, innovation, and growth. Our team ensures your software is not only functional but also future-proof and adaptable to your evolving needs.\n From concept to deployment, we specialize in building custom software that aligns with your business goals. Our solutions are designed to streamline operations, enhance productivity, and provide a competitive edge in your industry."
                  : "Chatbots are revolutionizing the way businesses interact with their customers. We develop intelligent chatbots that provide instant support, automate repetitive tasks, and deliver personalized experiences. Whether it’s for customer service, lead generation, or internal operations, our chatbots are designed to enhance engagement and efficiency.\n Your chatbot should be more than just a tool; it should be an extension of your brand. We create AI-powered chatbots that understand user intent, provide accurate responses, and integrate seamlessly with your existing systems. From simple FAQ bots to complex conversational AI, we ensure your chatbot delivers exceptional value."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isCsd
              ? "Unlock Customized Software Solutions"
              : "Unlock Intelligent Conversational Solutions"
          }
        />
        {/*  <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          Enhancing Brands with Engaging Web Experiences
        </h2>` */}
        <p data-aos="fade-up" className=" max-w-[60rem] mx-auto text-center">
          {isCsd
            ? `At Brainwaystech, we craft tailored software solutions that address your unique
business needs, drive innovation, and foster growth. Our expert software developers
leverage the latest technologies to deliver:`
            : `At Brainwaystech, we craft bespoke, AI-driven chatbots that captivate
          audiences, drive conversions, and foster long-term customer loyalty.
          Our expert chatbot developers leverage the latest technologies
          (Natural Language Processing, Machine Learning, Dialogflow) to deliver`}
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className="bg-primary/5  shadow-inner group shadow-primary/40 hover:bg-primary/10 items-center rounded-lg p-5 flex text-center flex-col"
            >
              {/* {service.icon} */}
              <service.icon className="w-[5rem] h-[5rem] fill-primary group-hover:fill-secondary transition-all duration-300" />
              <h6 className="text-xl font-medium mt-4 text-primary group-hover:text-secondary transition-all duration-300">
                {service.title}
              </h6>
              <p className="desc mt-2 text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      {/* <Portfolio page={page} /> */}
      <WhyChooseUs2 isCsd={isCsd} />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage2;
