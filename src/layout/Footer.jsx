const Footer = () => {
  return (
    <div className="wrapper bg-dark py-6">
      <div className="contain lg:flex-row flex-col justify-between items-center gap-5 lg:gap-2">
        <p className="uppercase text-center text-white text-base xl:text-xl font-bold font-arial">
          Copyright © 2023.all rights reserverd.nudropco
        </p>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
          <div className="flex justify-start items-center gap-2">
            <p className="text-white text-base xl:text-xl font-bold font-arial">
              Privacy Policy |
            </p>
            <p className="text-white text-base xl:text-xl font-bold font-arial">
              T&C's |{" "}
            </p>
            <p className="text-white text-base xl:text-xl font-bold font-arial">
              Contact Us
            </p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <a
              href="#"
              className="text-white w-[40px] h-[40px] grid place-items-center border-2 border-solid border-white rounded-full"
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-white w-[40px] h-[40px] grid place-items-center border-2 border-solid border-white rounded-full"
            >
              <img
                src="/insta.png"
                className="w-5 h-5 object-contain invert"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
