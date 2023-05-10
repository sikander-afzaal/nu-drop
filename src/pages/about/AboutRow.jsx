const AboutRow = ({ desc, img, order, classes }) => {
  return (
    <div
      className={`${
        order ? "flex-col xl:flex-row-reverse" : "flex-col xl:flex-row"
      } ${classes} flex justify-between items-start gap-8 sm:gap-14 w-full`}
    >
      <div
        className={`flex justify-start w-full xl:max-w-[650px]  flex-col gap-5 ${
          order
            ? "items-center text-left xl:items-end xl:text-right"
            : "items-center xl:items-start text-left"
        }`}
      >
        {desc.map((elem, idx) => {
          return (
            <p
              key={idx + elem}
              className="text-white  text-base sm:text-lg font-arial"
            >
              {elem}
            </p>
          );
        })}
      </div>
      <div className="bg-white bg-opacity-90 w-full xl:max-w-[600px] h-[400px] sm:h-[500px]"></div>
    </div>
  );
};

export default AboutRow;
