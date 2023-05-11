import { Fade } from "react-awesome-reveal";
import ItemCard from "../../components/ItemCard";

const Shop = () => {
  return (
    <div className="relative isolate wrapper pt-[150px] md:pt-[180px] pb-[120px] bg-mushroom2 bg-cover bg-center bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 bg-opacity-60"></div>
      <div className="contain flex-col justify-start items-center gap-8">
        <div className="flex justify-start items-center flex-col text-center gap-5">
          <Fade triggerOnce direction="up" cascade>
            <h2 className="font-arial uppercase font-bold text-4xl sm:text-5xl text-primaryPink">
              Our Products
            </h2>
            <p
              className={
                "font-arial text-center font-bold text-base sm:text-lg text-white"
              }
            >
              We sell a multitude of psychadelic goodies for you precious
              psychonaughts.. Take a peek through our freshly prepared dried
              mushroom range in an array of strains for your own choosing..
              allow yourself to voyage on an adventure of unique personal
              discovery. Whether you choose to microdose or to macrodose the
              choice is yours.. Make sure to read through each description to
              carefully pick a strain for your own personal consumption!
            </p>
            <p
              className={
                "font-arial text-center font-bold text-base sm:text-lg text-white"
              }
            >
              We dont stop there- if you enjoy the infinite benefits of daily
              microdosing, we also have a range of psilocybin capsules. Capsules
              can be used for both microdosing effects, as well as for
              macrodosing so if you arent too keen on mushrooms for reasons we
              cannot fathom then you can decide on what may work for you best.
            </p>
            <p
              className={
                "font-arial text-center font-bold text-base sm:text-lg text-white"
              }
            >
              And of course dont forget to tap into our funky world of vibrant
              psychadelic merchandise coming along very soon!
            </p>
            <p
              className={
                "font-arial text-center font-bold text-base sm:text-lg text-white"
              }
            >
              Stay tuned for them NU DROPS 🍄👽
            </p>
          </Fade>
        </div>
        <div className="flex justify-start items-start flex-col gap-7 sm:mt-0 mt-7 w-full">
          <select className="text-center px-[50px] w-full sm:w-[300px] bg-transparent outline-none border-2 border-solid border-white text-white text-lg sm:text-xl uppercase font-bold h-[55px] sm:h-[60px] rounded-full font-mont">
            <option
              className="text-black px-0 text-base font-normal"
              value="Sort by"
            >
              Sort by
            </option>
            <option
              className="text-black px-0 text-base font-normal"
              value="Value"
            >
              Value
            </option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-2 sm:mt-8 w-full">
            <Fade direction="up" triggerOnce cascade>
              <ItemCard
                name="HillBilly"
                desc="FREEZE DRIED FUNGI - 3.5g"
                price="55.00"
                clr="text-primaryBlue"
              />
              <ItemCard
                name="PE-7"
                desc="AIR DRIED FUNGI - 3.5g"
                price="35.00"
                clr="text-primaryYellow"
              />
              <ItemCard
                name="GHOST"
                desc="AIR DRIED FUNGI - 3.5g"
                price="45.00"
                clr="text-primaryPurple"
              />
              <ItemCard
                name="orissa india"
                desc="AIR DRIED FUNGI - 3.5g"
                price="35.00"
                clr="text-primaryGreen"
              />
              <ItemCard
                name="MICRODOSING CAPSULES"
                desc="MELMAC PE - 200mg"
                price="65.00"
                clr="text-white"
              />
              <ItemCard
                name="MaCRODOSING CAPSULES"
                desc="AVERY ALBINO - 500mg"
                price="80.00"
                clr="text-white"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
