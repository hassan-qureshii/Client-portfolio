import Header from "../components/Header/Header";
import { Steps } from "antd";
import {
  InfoOutlined,
  WorkspacePremiumOutlined,
  LightbulbOutlined,
  FlagOutlined,
} from "@mui/icons-material";
import Footer from '../components/Footer'

const { Step } = Steps;

const About = () => {
  return (
    <div>
      <Header />
      <div className="text-black px-4 py-16 flex flex-col items-center">

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center 
          bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] 
          bg-clip-text text-transparent"
        >
          My Creative Journey
        </h1>

        {/* Sub-Text */}
        <p className="max-w-3xl text-lg md:text-xl text-center mb-12">
          I'm{" "}
          <span
            className="font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] 
            bg-clip-text text-transparent"
          >
            Amina Gulzar
          </span>
          , a passionate graphic designer with 5+ years of experience crafting
          meaningful and visually powerful brand stories. I transform ideas into
          visuals that speak, connect, and inspire.
        </p>

        {/* STEPS */}
        <div className="w-full max-w-6xl custom-steps">
          <Steps
            direction="vertical"
            size="default"
            current={3}
            className="w-full"
            responsive
          >
            {/* ABOUT ME */}
            <Step
              title={
                <span
                  className="font-bold text-3xl 
                  bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98]
                  bg-clip-text text-transparent"
                >
                  About Me
                </span>
              }
              icon={
                <InfoOutlined
                  style={{
                    color: "#670D7F",
                  }}
                />
              }
              description={
                <span className="font-bold text-xl text-black">
                  Creating visually stunning and cohesive designs tailored to your brand identity.<br />
                  Designing engaging content that resonates with your audience and boosts engagement.<br />
                  Developing brand strategies to ensure consistency across all platforms.<br />
                  Helping you stand out in a competitive digital space with innovation and creativity.
                </span>
              }
            />

            {/* EXPERIENCE */}
            <Step
              title={
                <span
                  className="font-bold text-3xl 
                  bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98]
                  bg-clip-text text-transparent"
                >
                  Experience
                </span>
              }
              icon={
                <WorkspacePremiumOutlined
                  style={{
                    color: "#670D7F",
                  }}
                />
              }
              description={
                <span className="font-bold text-xl text-black">
                  With 4+ years of creative experience, I have collaborated with
                  global brands, coaches, institutes, and entrepreneurs—turning
                  bold ideas into impactful, memorable visuals that inspire trust
                  and connection.
                </span>
              }
            />

            {/* WHAT I DO BEST */}
            <Step
              title={
                <span
                  className="font-bold text-3xl 
                  bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98]
                  bg-clip-text text-transparent"
                >
                  What I Do Best
                </span>
              }
              icon={
                <LightbulbOutlined
                  style={{
                    color: "#670D7F",
                  }}
                />
              }
              description={
                <ul className="font-bold text-lg space-y-2 list-disc pl-6 text-black">
                  <li>Brand Identity Design & Strategy</li>
                  <li>Creative & High-Impact Social Media Designs</li>
                  <li>Professional Logo Design & LinkedIn Branding</li>
                  <li>Flyers, Posters & Thumbnail Designs</li>
                  <li>Video Editing & Visual Storytelling</li>
                  <li>Creative Direction for Modern Brands</li>
                </ul>
              }
            />

            {/* MISSION */}
            <Step
              title={
                <span
                  className="font-bold text-3xl 
                  bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98]
                  bg-clip-text text-transparent"
                >
                  Mission
                </span>
              }
              icon={
                <FlagOutlined
                  style={{
                    color: "#670D7F",
                  }}
                />
              }
              description={
                <span className="font-bold text-xl text-black ">
                  My mission is to empower brands to think bigger, design boldly,
                  and connect deeply with their audience through meaningful and
                  unforgettable visual communication.
                </span>
              }
            />
          </Steps>
        </div>
      </div>

      {/* CUSTOM STEP LINE GRADIENT */}
      <style>{`
        .custom-steps .ant-steps-item-tail::after {
          background: linear-gradient(to bottom, #670D7F, #851988, #D63D98) !important;
        }
      `}</style>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default About;