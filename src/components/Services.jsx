import ServicesCard from "../layouts/ServicesCard";
import silver from "../assets/img/silver.jpg";
import gold from "../assets/img/gold.jpg";
import platinum from "../assets/img/platinum.jpg";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Our Services
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <ServicesCard img={silver} title="Silver" price="$19.99" />
        <ServicesCard img={gold} title="Gold" price="$29.99" />
        <ServicesCard img={platinum} title="Platinum" price="$49.99" />
      </div>
    </div>
  );
};

export default Services;
