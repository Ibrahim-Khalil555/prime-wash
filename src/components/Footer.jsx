import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">PrimeWash</h1>
          <p className=" text-sm">
            We specialize in high-quality car washing services for all types of
            vehicles. From quick cleans to detailed care, we make sure your car
            leaves spotless and refreshed.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className=" hover:text-red-600 transition-all cursor-pointer"
              to="home"
            >
              Home
            </Link>
            <a
              className=" hover:text-red-600 transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-red-600 transition-all cursor-pointer"
              href="/"
            >
              Services
            </a>
            <a
              className=" hover:text-red-600 transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>

        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-red-600 transition-all cursor-pointer"
              href="/"
            >
              primewash@gmail.com
            </a>
            <a
              className=" hover:text-red-600 transition-all cursor-pointer"
              href="/"
            >
              018********
            </a>
            <a
              className=" hover:text-red-600 transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-red-600"> Prime Wash</span> | All rights
            reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
