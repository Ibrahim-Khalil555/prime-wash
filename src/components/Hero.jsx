import Button from "../layouts/Button";

const Hero = () => {
  return (
    <div className="relative h-64 w-full overflow-hidden">
      <img
        src="./assets/img/banner.jpg"
        className=" absolute inset-0 w-full h-full object-cover bg-no-repeat "
        alt="hero image"
      />
      <div className=" relative z-10 flex items-center justify-center h-full">
        <h1 className=" text-white font-semibold text-6xl">
          Premium Care for Every Drive.
        </h1>
        <p className=" text-white">
          We specialize in high-quality car washing services for all types of
          vehicles. From quick cleans to detailed care, we make sure your car
          leaves spotless and refreshed.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
