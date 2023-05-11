import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  useEffect(() => {
    const setBg = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", setBg);
    return () => {
      window.removeEventListener("scroll", setBg);
    };
  }, []);

  return (
    <header
      className={`wrapper fixed top-0 left-0 z-50 transition-all duration-300 ${
        headerBg ? "bg-dark" : "bg-transparent"
      }`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="bg-black fixed top-0 left-0 z-[90] cursor-pointer w-full h-full opacity-60 md:hidden block"
        ></div>
      )}
      <div
        className={`contain ${
          headerBg ? "py-3" : "py-5"
        } transition-all duration-300 justify-between items-center gap-5`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        <nav
          className={`flex justify-start items-center sm:items-start w-full sm:max-w-[450px] px-[3rem] pt-[6rem] pb-[3rem] overflow-y-auto bg-dark h-full md:h-auto md:max-w-none md:p-0 md:w-auto md:overflow-visible md:bg-transparent z-[93]  md:justify-center md:items-center gap-5 lg:gap-10 md:static fixed top-0 ${
            headerToggle ? "right-0" : "-right-full"
          } md:flex-row flex-col transition-all duration-700`}
        >
          <button
            onClick={() => setHeaderToggle(false)}
            className="md:hidden block absolute text-white top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <NavLink
            onClick={() => setHeaderToggle(false)}
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-primaryPink" : "text-white"
              } font-bold font-arial text-xl`
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setHeaderToggle(false)}
            to="/shop"
            className={({ isActive }) =>
              `${
                isActive ? "text-primaryPink" : "text-white"
              } font-bold font-arial text-xl`
            }
          >
            Shop
          </NavLink>
          <Link className="md:inline-block hidden" to="/">
            <img
              src="/logo.png"
              className={` transition-all duration-300 object-contain ${
                headerBg ? "w-[80px]" : "w-[120px] lg:w-[140px]"
              }`}
              alt=""
            />
          </Link>
          <NavLink
            onClick={() => setHeaderToggle(false)}
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-primaryPink" : "text-white"
              } font-bold font-arial text-xl`
            }
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => setHeaderToggle(false)}
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-primaryPink" : "text-white"
              } font-bold font-arial text-xl`
            }
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setHeaderToggle(false)}
            to="/basket"
            className={({ isActive }) =>
              `${
                isActive ? "text-primaryPink" : "text-white"
              } md:hidden inline-block`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </NavLink>
        </nav>
        <img
          src="/logo.png"
          className={` transition-all duration-300 object-contain ${
            headerBg ? "w-[80px]" : "w-[120px] lg:w-[140px]"
          } md:hidden inline-block`}
          alt=""
        />
        <NavLink
          to="/basket"
          className={({ isActive }) =>
            `${
              isActive ? "text-primaryPink" : "text-white"
            } md:inline-block hidden`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </NavLink>
        <button
          onClick={() => setHeaderToggle(true)}
          className=" md:hidden block text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
