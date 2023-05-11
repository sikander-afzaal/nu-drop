import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ItemCard from "../../components/ItemCard";

const Home = () => {
  return (
    <>
      <div className="relative isolate wrapper pt-[150px] md:pt-[180px] pb-[120px] bg-home bg-cover bg-bottom bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 bg-opacity-60"></div>
        <div className="contain flex-col justify-start items-center gap-8">
          <div className="w-full  my-10">
            <Splide
              className="pb-10"
              options={{
                width: "100%",
                arrows: true,
                pagination: false,
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
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center w-full bg-rainbow bg-cover bg-no-repeat py-[200px] sm:py-[300px]">
        <h2 className="grText uppercase text-center text-[35px] sm:text-[40px] md:text-[70px] font-bold font-a ">
          Turn on, tune in <br /> & Dropout
        </h2>
        <div className="mt-10">
          <p className="text-white uppercase font-bold font-arial text-base sm:text-lg md:text-2xl">
            Global No1 Psychedelic brand
          </p>
          <button className="text-black uppercase bg-white mt-1 font-bold font-arial h-[60px] w-full rounded-full text-xl sm:text-2xl">
            Order now
          </button>
        </div>
      </div>
      <div className="contain my-20 justify-start items-start flex-col gap-5">
        <h2 className="text-white font-mont font-bold text-xl text-center sm:text-left sm:text-3xl uppercase">
          What's Popular...
        </h2>
        <Splide
          className="pb-10"
          options={{
            width: "100%",
            arrows: true,
            pagination: false,
            perPage: 3,
            perMove: 1,
            drag: true,
            gap: "20px",
            type: "loop",
            breakpoints: {
              1050: {
                perPage: 2,
              },
              630: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <ItemCard
              btn="bg-primaryBlue"
              name="HillBilly"
              desc="FREEZE DRIED FUNGI - 3.5g"
              price="55.00"
              clr="text-primaryBlue"
            />
          </SplideSlide>
          <SplideSlide>
            <ItemCard
              btn="bg-primaryYellow"
              name="PE-7"
              desc="AIR DRIED FUNGI - 3.5g"
              price="35.00"
              clr="text-primaryYellow"
            />
          </SplideSlide>
          <SplideSlide>
            <ItemCard
              btn="bg-primaryPurple"
              name="GHOST"
              desc="AIR DRIED FUNGI - 3.5g"
              price="45.00"
              clr="text-primaryPurple"
            />
          </SplideSlide>
          <SplideSlide>
            <ItemCard
              btn="bg-primaryGreen"
              name="orissa india"
              desc="AIR DRIED FUNGI - 3.5g"
              price="35.00"
              clr="text-primaryGreen"
            />
          </SplideSlide>
          <SplideSlide>
            <ItemCard
              btn="bg-white"
              name="MICRODOSING CAPSULES"
              desc="MELMAC PE - 200mg"
              price="65.00"
              clr="text-white"
            />
          </SplideSlide>
          <SplideSlide>
            <ItemCard
              btn="bg-white"
              name="MaCRODOSING CAPSULES"
              desc="AVERY ALBINO - 500mg"
              price="80.00"
              clr="text-white"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="wrapper relative py-20 sm:py-32 bg-mission bg-cover bg-no-repeat bg-center isolate">
        <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 bg-opacity-60"></div>
        <div className="contain  justify-start items-center  flex-col gap-8">
          <h2 className="font-arial uppercase font-bold text-4xl sm:text-5xl text-white">
            Our mission
          </h2>
          <p
            className={
              "font-arial text-center font-bold text-base sm:text-lg text-white sm:mb-20"
            }
          >
            NU DROP Co’s mission is to increase and enhance the value of our
            customer’s lives. To lead our industry in the right direction which
            will therefore enable us to contribute to our community to
            facilitate change. This can then bring meaningful value to our
            communities and, as a result, change the world to become a better
            open minded place for us all to flourish, grow, and heal.
          </p>
          <div className="bg-white bg-opacity-90 w-full h-[400px] sm:h-[600px] rounded-2xl"></div>
        </div>
      </div>
      <div className="contain xl:flex-row flex-col my-20 sm:my-32 justify-between items-center gap-10">
        <div className="flex justify-start items-center text-center xl:text-left xl:items-start flex-col gap-5">
          <h2 className="font-mont font-bold text-3xl sm:text-5xl 2xl:text-6xl text-white uppercase">
            What our clients <br /> <span className="grText">Say about us</span>
          </h2>
          <p className="text-base sm:text-lg font-bold font-arial text-white">
            Don’t take our word for it. Here’s what our clients have to say
            about us.
          </p>
        </div>
        <div className="w-full max-w-[600px]">
          <Splide
            className="pb-10 pink-slide"
            options={{
              width: "100%",
              arrows: false,
              pagination: true,
              perPage: 1,
              perMove: 1,
              drag: true,
              gap: "20px",
              type: "loop",
            }}
          >
            <SplideSlide>
              <div className="w-full bg-white rounded-xl bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full bg-white rounded-xl bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full bg-white rounded-xl bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full bg-white rounded-xl bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Home;
