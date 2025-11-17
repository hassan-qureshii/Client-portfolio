import Header from "../components/Header/Header";
import { Steps } from "antd";
import { Info, EmojiObjects, School, Star } from "@mui/icons-material";

const { Step } = Steps;

const About = () => {
  return (
    <div>
      <Header />
      <div className="text-black px-4 py-16 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent">
          My Creative Journey
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-center mb-12">
          I'm{" "}
          <span className="font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent">
            Amina Gulzar
          </span>
          , a passionate graphic designer with 5+ years of experience crafting
          visual stories for brands worldwide. I believe design is more than
          aesthetics — it's a way to connect ideas with emotions.
        </p>

        <div className="w-full max-w-5xl">
          <Steps
            direction="vertical"
            size="default"
            current={3}
            className="w-full"
            responsive
          >
            <Step
              title={
                <span className="font-bold text-2xl">About Me</span>
              }
              icon={<Info />}
              description={
                <span className="font-bold text-xl">
                  Creative thinker with a love for clean, modern design. I specialize in branding and digital illustration.
                </span>
              }
            />
            <Step
              title={
                <span className="font-bold text-2xl">Experience</span>
              }
              icon={<Star />}
              description={
                <span className="font-bold text-xl">
                  5+ years of hands-on design experience. Worked with 100+ brands and 30+ startups globally.
                </span>
              }
            />
            <Step
              title={
                <span className="font-bold text-2xl">Projects</span>
              }
              icon={<EmojiObjects />}
              description={
                <span className="font-bold text-xl">
                  Over 80 successful projects — each crafted with strategy, harmony, and a spark of creativity.
                </span>
              }
            />
            <Step
              title={
                <span className="font-bold text-2xl">Future Goals</span>
              }
              icon={<School />}
              description={
                <span className="font-bold text-xl">
                  Aspiring Creative Director. I aim to mentor young designers and build a studio where design meets innovation.
                </span>
              }
            />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default About;