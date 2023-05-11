const ItemCard = ({ img, name, desc, url, clr, price, btn }) => {
  return (
    <div className="flex justify-start text-center items-center flex-col gap-8">
      <div className="bg-white rounded-2xl bg-opacity-90 w-full h-[500px]"></div>
      <div className="flex justify-start gap-1 items-center flex-col w-full">
        <h3
          className={`${clr} text-xl sm:text-2xl font-bold font-arial leading-[1] uppercase`}
        >
          {name}
        </h3>
        <p className="text-white text-opacity-60 text-lg sm:text-xl font-bold font-arial leading-[1]">
          {desc}
        </p>
        <p className="text-white mt-1 text-4xl font-bold font-arial leading-[1]">
          ${price}
        </p>
        {btn && (
          <button
            className={`w-full ${btn} rounded-full h-[55px] ${
              btn === "bg-white" ? "text-black" : "text-white"
            } max-w-[300px] font-bold text-lg mt-2 font-arial uppercase`}
          >
            Add to basket
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
