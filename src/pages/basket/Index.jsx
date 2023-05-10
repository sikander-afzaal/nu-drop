const Basket = () => {
  return (
    <div className="wrapper mb-8">
      <div className="flex justify-center items-center w-full bg-mushroom1 isolate relative bg-topMid min-h-[500px] sm:min-h-[600px] 2xl:min-h-[700px] bg-cover bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 bg-opacity-60"></div>
        <h2 className="font-arial font-bold text-4xl sm:text-5xl text-primaryPink">
          BASKET
        </h2>
      </div>
      <div className="contain flex-col justify-start items-start py-10 gap-4">
        <h3 className="text-white text-3xl font-bold font-arial">MY BAG</h3>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:flex justify-start items-start flex-col gap-6">
          <div className="border-y border-solid border-white hidden lg:grid grid-cols-[2fr__1fr__1fr__1fr] py-4 w-full gap-5">
            <h4 className="uppercase font-normal font-mont text-white text-xl">
              Product details
            </h4>
            <h4 className="uppercase text-center font-normal font-mont text-white text-xl">
              Quantity
            </h4>
            <h4 className="uppercase text-center font-normal font-mont text-white text-xl">
              Price
            </h4>
            <h4 className="uppercase text-center font-normal font-mont text-white text-xl">
              Total
            </h4>
          </div>
          <BagRow
            title="ALBINO AVERY 500mg"
            desc="MACRODOSING CAPSULES"
            quantity={2}
            price="65.00"
            total="130.00"
          />
          <BagRow
            title="ALBINO AVERY 500mg"
            desc="MACRODOSING CAPSULES"
            quantity={2}
            price="65.00"
            total="130.00"
          />
        </div>
        <div className="flex-wrap flex justify-center sm:justify-start bg-white p-4 rounded-full mt-4 items-center gap-3">
          <img src="/mastercard.png" className="h-6 object-contain" alt="" />
          <img src="/visa.png" className="h-6 object-contain" alt="" />
          <img src="/electron.png" className="h-6 object-contain" alt="" />
          <img src="/maestro.png" className="h-6 object-contain" alt="" />
          <img src="/american.png" className="h-6 object-contain" alt="" />
          <img src="/paypal.png" className="h-6 object-contain" alt="" />
          <img src="/apple.png" className="h-6 object-contain" alt="" />
        </div>
        <div className="flex justify-start items-start flex-col gap-4 w-full my-6">
          <h3 className="text-white min-w-full font-bold font-arial text-2xl uppercase border-b border-solid border-white pb-4">
            Order summary
          </h3>
          <div className="flex justify-between items-center w-full">
            <p className="text-white font-bold text-lg font-arial">1 Item</p>
            <p className="text-white font-bold text-lg font-arial">$130.00</p>
          </div>
          <button className="text-black mt-1 rounded-full bg-white w-full h-[50px] text-xl font-bold font-arial ">
            Continue Securely
          </button>
        </div>
        <div className="flex mt-10 justify-start items-start flex-col gap-4 w-full">
          <p className="uppercase font-normal font-mont text-white text-base sm:text-xl">
            Do you have a promotional code?
          </p>
          <div className="w-full flex justify-start items-center border border-white border-solid max-w-[600px] h-[50px]">
            <input
              type="text"
              className="w-full bg-transparent text-white text-xl font-normal font-mont"
            />
            <button className="text-black bg-white h-full min-w-[150px] text-xl font-bold font-arial">
              Apply
            </button>
          </div>
          <button className="text-white font-normal font-mont text-opacity-50 text-base sm:text-xl">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;

const BagRow = ({ img, title, desc, quantity, price, total }) => {
  return (
    <div className="grid lg:border-0 border border-white border-solid px-5 lg:p-0 grid-cols-1  lg:grid-cols-[2fr__1fr__1fr__1fr] items-start  lg:items-center py-4 w-full gap-5">
      <div className="flex justify-start items-center gap-3 sm:gap-5">
        <div className="bg-gray-400 w-[60px] h-[60px]"></div>
        <div className="flex justify-start items-start flex-col gap-2">
          <div>
            <h4 className="text-white font-bold font-arial text-lg sm:text-xl">
              {title}
            </h4>
            <p className="text-white text-opacity-60 text-xs sm:text-sm font-bold font-arial">
              {desc}
            </p>
          </div>
          <button className="flex justify-start items-center gap-2 text-white">
            <p className="text-white text-base font-mont font-normal">Remove</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="font-bold text-xl font-arial lg:text-center text-white">
        <span className="inline-block  lg:hidden">Quantity:</span> {quantity}
      </p>
      <p className="font-bold text-xl font-arial lg:text-center text-white">
        <span className="inline-block  lg:hidden">Price:</span> ${price}
      </p>
      <p className="font-bold text-xl font-arial lg:text-center text-white">
        <span className="inline-block  lg:hidden">Total:</span> ${total}
      </p>
    </div>
  );
};
