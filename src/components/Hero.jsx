import Button from "../layouts/Button";

const Hero = () => {
  return (
    <div
      aria-label="A view of the mountains at sunrise"
      className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('')] bg-cover bg-no-repeat "
    >
      <div className=" w-full lg:w-2/3 space-y-5">
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
