const Contact = () => {
  return (
    <div className="relative isolate wrapper py-[120px] bg-mushroom1 bg-cover bg-center bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 bg-opacity-60"></div>
      <div className="contain flex-col justify-start items-center gap-8">
        <h2 className="font-arial uppercase font-bold text-4xl sm:text-5xl text-primaryPink">
          Contact Us
        </h2>
        <div className="lg:mt-6">
          <p className="text-lg sm:text-2xl font-bold font-arial  text-center max-w-[1200px] leading-[1.7] text-white">
            <span className="text-primaryBlue ">
              Have a question or need assistance?
            </span>{" "}
            We'd love to hear from you!
          </p>
          <p className="text-lg sm:text-2xl mt-4 font-bold font-arial  text-center max-w-[1000px] leading-[1.7] text-white">
            Get in touch with our team using the contact information provided
            below, and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 w-full mt-2 sm:mt-8 lg:mt-14">
          <div className="flex justify-start items-start flex-col gap-8">
            <input
              type="text"
              placeholder="Full Name"
              className="text-white font-bold placeholder:text-white outline-0 font-arial text-2xl w-full h-[60px] px-5 rounded-full border-2 border-solid border-white bg-transparent"
            />
            <input
              type="text"
              placeholder="Phone"
              className="text-white font-bold placeholder:text-white outline-0 font-arial text-2xl w-full h-[60px] px-5 rounded-full border-2 border-solid border-white bg-transparent"
            />
            <input
              type="text"
              placeholder="Email"
              className="text-white font-bold placeholder:text-white outline-0 font-arial text-2xl w-full h-[60px] px-5 rounded-full border-2 border-solid border-white bg-transparent"
            />

            <input
              type="text"
              placeholder="Message"
              className="text-white font-bold placeholder:text-white outline-0 font-arial text-2xl w-full h-[60px] px-5 rounded-full border-2 border-solid border-white bg-transparent"
            />
            <button className="h-[60px] bg-primaryGr rounded-full w-full text-black uppercase text-2xl font-bold font-arial">
              Submit Now
            </button>
          </div>
          <div className="flex justify-start items-start flex-col gap-8 lg:gap-12">
            <div className="flex justify-start items-start flex-col gap-5 border-b border-solid border-white lg:pb-12 pb-8 w-full sm:px-6">
              <a
                href="tel:+44 758 1892 745"
                className="flex justify-start items-start gap-4"
              >
                <div className="text-primaryPink w-[40px] h-[40px] grid place-items-center border-2 border-solid border-primaryPink rounded-full">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <p className="text-white font-bold font-arial text-2xl">
                  +44 758 1892 745
                </p>
              </a>
              <a
                href="mailto:info@nudropco.io"
                className="flex justify-start items-start gap-4"
              >
                <div className="text-primaryPink w-[40px] h-[40px] grid place-items-center border-2 border-solid border-primaryPink rounded-full">
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
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </div>
                <p className="font-arial font-bold text-2xl text-white">
                  info@nudropco.io
                </p>
              </a>
            </div>
            <div className="sm:px-6">
              <h3 className="text-white font-bold font-arial text-2xl uppercase">
                Stay in the loop
              </h3>
              <p className="text-white font-bold font-arial text-opacity-50 text-xl">
                Subscribe to newsletter now!
              </p>
            </div>
            <div className="sm:px-6 w-full">
              <div className="flex justify-start items-center w-full px-5 rounded-full border-2 border-solid border-white ">
                <input
                  type="text"
                  placeholder="Enter email here"
                  className="text-white font-bold placeholder:text-white outline-0 font-arial text-2xl w-full h-[60px]  bg-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-8 h-8 min-w-[32px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
