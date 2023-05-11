import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Product = () => {
  return (
    <div className="relative isolate wrapper pt-[150px] md:pt-[180px] pb-[120px] bg-mushroom2 bg-cover bg-center bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 bg-opacity-60"></div>
      <div className="contain justify-start items-center flex-col gap-20">
        <div className="justify-center xl:flex-row flex-col-reverse items-center xl:items-start gap-14 flex w-full">
          <div className="flex justify-between w-full xl:w-auto xl:justify-start items-center lg:items-start xl:items-center flex-col lg:flex-row xl:flex-col gap-8">
            <div className="bg-white rounded-2xl bg-opacity-90 w-full  sm:w-[500px] h-[600px]"></div>
            <div className="grid sm:w-auto w-full grid-cols-1 sm:grid-cols-2   gap-y-5 gap-x-10">
              <Stats name="Visuals" rating={2} />
              <Stats name="Intensity" rating={3} />
              <Stats name="Creativity" rating={3} />
              <Stats name="Strength" rating={3} />
              <Stats name="Philosophical" rating={3} />
              <Stats name="Overall" rating={3} />
            </div>
          </div>
          <div className="flex justify-start items-start flex-col gap-5">
            <div>
              <h3 className="text-2xl sm:text-4xl font-mont font-bold text-white">
                MACRODOSE CAPSULES
              </h3>
              <p className="text-white text-opacity-70 font-mont text-lg sm:text-2xl ">
                AVERY ALBINO - 500mg{" "}
              </p>
            </div>
            <p className="text-white font-bold text-base sm:text-lg md:text-xl 2xl:text-2xl font-mont">
              A macrodose is basically just what it sounds like: a big dose of
              Psilocybin mushrooms. There are plenty of reasons to take a whole
              heap of psilocybin mush-rooms but the most compelling one is that
              it's a lot of fun. A deep psychedelic trip can also ctalyse deep
              reflective iner work. If you do want to chal-lenge ingrained
              patterns of thought, or you require some rigorous inner
              reflection- psilocybin can help you with this!
            </p>
            <p className="text-white font-bold text-base sm:text-lg md:text-xl 2xl:text-2xl font-mont">
              The Avery Albino is a highly potent cubensis hybrid famous for its
              long lasting body high and ghostly white colouration. This intense
              but soothing strain remains a bit of a mystery. It isn't clear who
              is responsible for the Avery Albino strain ans seems to be a bit
              of a mystery.
            </p>
            <p className="text-white font-bold text-base sm:text-lg md:text-xl 2xl:text-2xl font-mont">
              Some say it is a mutation of the famous hybrid cubensis whilst
              others say there is a link to the Cambodian strain. Either way,
              this exotic hybrid psylocybe is tough to cultivate and is
              considered rare and a refined Psylo-cybe!
            </p>
            <div className="flex mt-3 justify-start sm:w-auto w-full items-center sm:items-start flex-col gap-3">
              <p className="text-white font-bold font-arial text-4xl">$80.00</p>
              <button className="bg-primaryPink text-white uppercase rounded-full h-[60px] text-xl font-bold font-arial border-2 border-solid border-primaryPink hover:bg-transparent transition-all duration-300 px-10">
                Add to basket
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start items-start flex-col gap-6 sm:gap-10">
          <h2 className="text-white font-mont font-bold text-xl text-center sm:text-left sm:text-3xl uppercase">
            What other people also bought
          </h2>
          <Splide
            className="pb-10 w-full"
            options={{
              width: "100%",
              arrows: true,
              perPage: 3,
              pagination: false,
              perMove: 1,
              drag: true,
              gap: "50px",
              type: "loop",
              breakpoints: {
                1220: {
                  perPage: 2,
                  gap: "30px",
                },
                660: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div className="w-full rounded-xl bg-white bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full rounded-xl bg-white bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full rounded-xl bg-white bg-opacity-90 h-[500px]"></div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Product;

const Stats = ({ name, rating }) => {
  return (
    <div className="flex justify-start items-start  sm:items-center flex-col gap-2 w-full">
      <h3 className="text-white font-normal uppercase font-anja tracking-[3px] text-xl">
        {name}
      </h3>
      <div className="grid grid-cols-5 gap-1">
        {Array(5)
          .fill(false)
          .map((elem, idx) => {
            return idx + 1 <= rating ? (
              <img
                key={idx + rating}
                src="/mushroom-rate.png"
                className="w-9  object-contain"
                alt=""
              />
            ) : (
              <img
                key={idx + rating}
                src="/mushroom-rate.png"
                className="w-9 brightness-[0.5] object-contain"
                alt=""
              />
            );
          })}
      </div>
    </div>
  );
};
