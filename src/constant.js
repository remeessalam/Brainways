import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import { FaRobot, FaComments, FaHeadset, FaPlug } from "react-icons/fa";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Chatbots.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Custom Software Development.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Game Development.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";
// Custom Software Development  services
import { ReactComponent as customsoftwareicon1 } from "./assets/svgs/services/Custom Software Development.svg";
import { ReactComponent as customsoftwareicon2 } from "./assets/svgs/services/Software Application Development.svg";
import { ReactComponent as customsoftwareicon3 } from "./assets/svgs/services/Legacy System Modernization.svg";
import { ReactComponent as customsoftwareicon4 } from "./assets/svgs/services/Software Integration Services.svg";
// chatbot development services
import { ReactComponent as chatboticon1 } from "./assets/svgs/services/AIPoweredChatbots.svg";
import { ReactComponent as chatboticon2 } from "./assets/svgs/services/Custom-Chatbot Development.svg";
import { ReactComponent as chatboticon3 } from "./assets/svgs/services/Conversational AI Solutions.svg";
import { ReactComponent as chatboticon4 } from "./assets/svgs/services/Chatbot Integration Services.svg";

export { logoImg };

export const companyDetails = {
  phone: "+91-9361061592",
  phone2: "+91-7667924881",
  address: "216b,Salem Main Road,Krishnagiri - 635001.",
  email: "admin@brainwaystech.com",
  linkedin: "https://www.linkedin.com/company/brainwaystech-llp/",
  instagram:
    "https://www.instagram.com/brainwaystech.ai?igsh=MWlieGJnZXhtMG9weg==",
  twitter: "https://x.com/vasanthsoffici",
};
export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  // {
  //   path: "/blogs",
  //   name: "Blogs",
  //   element: <Blogs />,
  // },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webServiceIcon3,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];
export const customSoftwareServices = [
  {
    id: 1,
    icon: customsoftwareicon1,
    title: "Custom Software Development",
    description: "Bespoke solutions for complex business challenges",
  },
  {
    id: 2,
    icon: customsoftwareicon2,
    title: "Software Application Development",
    description: "Scalable, secure, and high-performance applications",
  },
  {
    id: 3,
    icon: customsoftwareicon3,
    title: "Legacy System Modernization",
    description: "Upgrading outdated systems for enhanced efficiency",
  },
  {
    id: 4,
    icon: customsoftwareicon4,
    title: "Software Integration Services",
    description: "Seamless integration with existing systems and platforms",
  },
];

export const chatbotServices = [
  {
    id: 1,
    title: "AI-Powered Chatbots",
    icon: chatboticon1,
    description:
      "Intelligent, data-driven solutions for complex customer interactions.",
  },
  {
    id: 2,
    title: "Custom Chatbot Development",
    icon: chatboticon2,
    description:
      "Tailored chatbots for websites, messaging platforms, and voice assistants.",
  },
  {
    id: 3,
    title: "Conversational AI Solutions",
    icon: chatboticon3,
    description:
      "Innovative solutions for customer support, sales, and marketing.",
  },
  {
    id: 4,
    title: "Chatbot Integration Services",
    icon: chatboticon4,
    description: "Seamless integration with existing systems and platforms.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Samiksha Sharma",
    position: "Operations Manager at FE-Finance",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Brainways Tech's web development service is top-notch. They built a responsive, user-friendly website that reflects our brand perfectly. Great job!”",
  },
  {
    id: 2,
    name: "Anubhav J.",
    position: "Marketing Director at Ocxee",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Brainways Tech's AI solutions are cutting-edge, driving our business forward. Their app development team exceeded expectations. Highly recommended!”",
  },
  {
    id: 3,
    name: "Emily T",
    position: "Operations Manager at Leaderbridge",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The AI solutions from Brainways Tech have revolutionized our operations. Their expertise and support are invaluable. A truly strategic partner.”",
  },
  {
    id: 4,
    name: "Aarav Kapoor",
    position: "Product Manager of Gigzio",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“Brainways Tech's app development team delivered a seamless, feature-rich application on time and within budget. Fantastic experience overall”",
  },
  {
    id: 5,
    name: "Jessica M",
    position: "COO of FE Group",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“Impressed with Brainways Tech's creativity in app development. They turned our vision into reality flawlessly. Exceptional service!”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    link: "/web-development",
    description:
      "Elevate your online presence with our bespoke web development services. Whether you need a simple portfolio website or a complex e-commerce platform, our skilled developers will bring your vision to life. We prioritize user experience, performance, and scalability to ensure your website stands out in the digital landscape and delivers tangible results for your business.",
    icon: allServiceIcon1,
    detailHeading: "Web Development: Tailored Websites that Deliver Results",
    detailContent: `<p>At Brainways Tech, we build more than just websites—we create digital experiences that are crafted to perform. Whether you're a small business looking to establish an online presence or a larger company needing a full-featured, scalable platform, our web development services are designed to meet your specific needs. Our team of developers, designers, and strategists work together to:</p>
    <br/>
    <ol>
      <li><b>Develop Custom Websites:</b><br/> No cookie-cutter solutions here. We build each site from the ground up, ensuring it aligns with your brand and business goals.</li>
      <br/>
      <li><b>Optimize for Speed and Security:</b> <br/> Performance matters. We ensure your website loads fast and is equipped with the latest security features to protect your data and users.</li>
      <br/>
      <li><b>Ensure Scalability:</b><br/>  As your business grows, your website should too. Our websites are built to handle increased traffic and scale with your success.</li>
    </ol>
    <br/>
    <br/>
    <p>Whether you need an e-commerce platform, a corporate site, or a portfolio, our custom web development services deliver results that enhance your online visibility and user engagement.</p>`,
  },
  {
    id: 2,
    title: "App Development",
    link: "/app-development",
    description:
      "Take your business to the next level with our custom app development solutions. From iOS and Android applications to cross-platform solutions, we have the expertise to create intuitive and feature-rich apps that resonate with your target audience. Whether you’re launching a new product or expanding your digital footprint, we’ll collaborate with you every step of the way to deliver a mobile experience that exceeds expectations.",
    icon: allServiceIcon2,
    detailHeading:
      "App Development: Powerful Mobile Solutions for Modern Businesses",
    detailContent: `<p>In a mobile-first world, having a well-designed app can set your business apart. At Brainways Tech, we specialize in creating custom mobile applications that are user-friendly, feature-rich, and tailored to your specific goals. Our app development services cover everything from concept to deployment:</p>
      <br/>
      <ol>
        <li><b>iOS and Android Apps:</b><br/>Whether you’re targeting iPhone users or Android fans, we develop native apps for both platforms to ensure optimal performance and user experience.</li>
        <br/>
        <li><b>Cross-Platform Solutions:</b> <br/> Need to reach a wider audience with one codebase? We develop cross-platform apps that work seamlessly on both iOS and Android, reducing development time and cost without compromising quality.</li>
        <br/>
        <li><b>Feature Integration:</b><br/>  From in-app purchases to push notifications and social media integration, we ensure your app has all the features it needs to engage users and drive results.</li>
      </ol>
      <br/>
      <br/>
      <p>We’re not just about writing code—we're about building apps that solve real business problems and provide exceptional user experiences.</p>`,
  },
  {
    id: 4,
    title: "Chatbot Development",
    description:
      "Transform your customer interactions with our advanced chatbot solutions. Our expert team specializes in developing intelligent chatbots that streamline communication, automate tasks, and enhance user experiences. From customer support to lead generation, we’ll help you harness the power of conversational AI to drive efficiency and engagement.",
    icon: allServiceIcon4,
    link: "/chatbot-development",
    detailHeading: "Chatbots: Automate and Enhance Customer Interaction",
    detailContent: `<p>Transform your customer interactions with our advanced chatbot solutions. Our expert team specializes in developing intelligent chatbots that streamline communication, automate tasks, and enhance user experiences. From customer support to lead generation, we’ll help you harness the power of conversational AI to drive efficiency and engagement. Our chatbot services include:</p>
      <br/>
      <ol>
        <li><b>Natural Language Processing (NLP):</b><br/>We use advanced AI and NLP to build chatbots that understand and respond to user queries in a conversational, human-like way.</li>
        <br/>
        <li><b>Custom Workflows:</b> <br/> Whether you're looking to automate customer support, generate leads, or assist in e-commerce, we design chatbots tailored to your specific business goals.</li>
        <br/>
        <li><b>Multi-Platform Integration:</b><br/>  Our chatbots can be integrated across various platforms, including your website, Facebook Messenger, WhatsApp, and more, ensuring you meet customers wherever they are.</li>
      </ol>
      <br/>
      <br/>
      <p>We focus on delivering solutions that enhance customer satisfaction and drive results, while giving you more time to focus on growing your business.</p>`,
  },
  {
    id: 5,
    title: "Custom Software Development",
    description:
      "Unlock the full potential of your business with our tailored custom software development solutions. We create agile, scalable, and high-performing software that enhances efficiency and fuels innovation.",
    icon: allServiceIcon5,
    link: "/custom-software-development",

    detailHeading:
      "Custom Software Development: Tailored Solutions for Your Business",
    detailContent: `<p>In today's fast-paced digital landscape, off-the-shelf software solutions often fall short of meeting unique business needs. That's where our custom software development services come in – tailored to empower your organization with agility, efficiency, and innovation.</p>
      <br/>
      <ol>
        <li><b>Boost Operational Efficiency:</b><br/> Our solutions streamline business processes, reducing inefficiencies and improving productivity.</li>
        <br/>
        <li><b>Enhance Customer Experiences:</b> <br/> We build user-centric software that improves engagement and satisfaction.</li>
        <br/>
        <li><b>Seamless Integration:</b><br/> Our software integrates effortlessly with your existing systems to ensure a smooth transition.</li>
      </ol>
      <br/>
      <br/>
      <p>Our expert developers leverage the latest technologies (AI, ML, IoT, Cloud Computing) and agile methodologies to build scalable and innovative solutions. With a collaborative approach, ongoing support, and flexible solutions, we help your business thrive in a competitive digital world.</p>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
