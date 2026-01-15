import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura">
          PrimeWash delivered excellent service and outstanding results. My car
          looked brand new, staff were professional, friendly, and efficient,
          and the overall experience exceeded my expectations completely from
          start to finish.
        </ReviewCard>
        <ReviewCard img={img2} name="John Deo">
          PrimeWash is my go to car wash service. Consistent results, great
          customer support, and careful cleaning make them reliable,
          trustworthy, and worth recommending to anyone who values quality car
          care.
        </ReviewCard>
        <ReviewCard img={img3} name="Victoria Zoe">
          PrimeWash is my go to car wash service. Consistent results, great
          customer support, and careful cleaning make them reliable,
          trustworthy, and worth recommending to anyone who values quality car
          care.
        </ReviewCard>
      </div>
    </div>
  );
};

export default Review;
