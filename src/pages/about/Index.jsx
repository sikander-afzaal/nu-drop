import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AboutRow from "./AboutRow";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="relative isolate wrapper pt-[150px] md:pt-[180px] pb-[120px] bg-mushroom1 bg-cover bg-center bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 bg-opacity-60"></div>
      <div className="contain flex-col justify-start items-center gap-8">
        <Fade cascade triggerOnce direction="up">
          <h2 className="font-arial uppercase font-bold text-4xl sm:text-5xl text-primaryPink">
            About us
          </h2>
          <p className="text-lg sm:text-2xl mt-4 font-bold font-arial  text-center max-w-[1000px] leading-[1.7] text-white">
            "Turn on, Tune in and Drop out" (Timothy Leary 1966). <br /> We are
            NU Drop Co.
          </p>
        </Fade>

        <div className="w-full pink-slide my-10">
          <Splide
            className="pb-10"
            options={{
              width: "100%",
              arrows: false,
              perPage: 1,
              perMove: 1,
              drag: true,
              gap: "20px",
              type: "loop",
            }}
          >
            <SplideSlide>
              <div className="w-full bg-white bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full bg-white bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full bg-white bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="flex justify-center items-center flex-col text-center gap-6 mt-10">
          <Fade cascade triggerOnce direction="up">
            <p className="text-white  text-lg font-arial">
              NU Drop Co are actively dedicated to dismantle the stigma
              surrounding the magnificent mushroom species whilst presenting
              mushroom medicine to the world in a quirky fun loving and
              approachable way.
            </p>
            <p className="text-white  text-lg font-arial">
              Nu Drop is very fortunate to be based in San Francisco appearing
              to Lead the industry due to its most recent decriminalization of
              psychedelics. The current push for legalisation in San Francisco,
              California enables NU Drop Co and other psilocybin entrepreneurs
              to operate within a 'grey area meaning it is not legal but is not
              being rigorously policed either and is currently being praised for
              its medicinal properties.
            </p>
          </Fade>
        </div>
        <AboutRow
          classes="mb-5 xl:mb-20 mt-14 xl:mt-32"
          desc={[
            "With magic mushrooms having recently been decriminalised here in San Francisco, we are super excited to bring to you our unrivalled, trippy, vi-brantly colourful and much loved psychedelic range.",
            "Our range of psilocybin products contain the highest quality ingredients with some of the most sought after strains on the market. ",
            "Every singular fruit is lovingly grown with patience, cared for and packaged with healing intention. We are also currently organising and Co ordinating Research and Develop-ment (R Et D) on new genetics and crosses with the intention of bringing you something truly magical.",
          ]}
        />
        <AboutRow
          classes="my-5 xl:my-20"
          desc={[
            "We can proudly announce that the NU DROP Co team executes everything in house from grain to substrate - to agar - to finally harvesting only the best exotic fruits for our range. ",
            "We adore and respect the magnificent fruits and endeavour to provide our customers with a taste of its sublime, ethical qualities. ",
            "We at NU DROP Co hope to open the doors to faster heating as well as expand consciousness. Happy tripping! ",
          ]}
          order
        />
      </div>
    </div>
  );
};

export default About;
