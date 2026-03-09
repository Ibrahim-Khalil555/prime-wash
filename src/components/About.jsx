import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="about-image" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          PrimeWash is a professional car washing service focused on delivering
          clean, safe, and reliable care for your vehicle. We use modern
          equipment and trusted cleaning methods to protect your car’s surface
          while restoring its shine.
          <br></br>
          <br></br>
          Our goal is to provide consistent qualityand a smooth customer
          experience every time. From routine washes to detailed care, PrimeWash
          is committed to keeping your vehicle looking its best with expert
          attention and professionalism.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
