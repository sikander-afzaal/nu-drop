const AgeModal = ({ setModal }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed top-0 left-0 bg-black bg-opacity-90 w-full h-full z-[100]"
      ></div>
      <div className="fixed top-1/2 bg-cover bg-no-repeat w-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-start items-center flex-col text-center gap-6 sm:gap-10 psm:b-14 py-10 sm:pt-20 px-4 sm:px-7 max-w-[1200px] bg-black rounded-2xl border-2 border-solid border-white max-h-[90%] overflow-y-auto bg-rainbow z-[102]">
        <button
          onClick={() => setModal(false)}
          className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 grid place-items-center text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img src="/logo2.png" className="w-[200px] object-contain" alt="" />
        <h3 className="text-white text-xl md:text-3xl font-bold font-arial">
          THIS WEBSITE REQUIRES YOU TO BE OVER 21 YEARS OF AGE. . .
        </h3>
        <h2 className="text-3xl md:text-6xl font-bold text-white font-arial">
          ARE YOU 21?
        </h2>
        <div
          onClick={() => setModal(false)}
          className="flex mt-5 md:flex-row flex-col justify-center items-center w-full gap-5 md:gap-10"
        >
          <button className="bg-white font-bold text-black hover:bg-transparent border-2 border-solid border-white rounded-full text-3xl font-arial transition-all duration-300 hover:text-white w-full h-[60px]">
            No
          </button>
          <button
            onClick={() => setModal(false)}
            className="bg-transparent font-bold text-white hover:bg-white border-2 border-solid border-white rounded-full text-3xl font-arial transition-all duration-300 hover:text-black w-full h-[60px]"
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
};

export default AgeModal;
