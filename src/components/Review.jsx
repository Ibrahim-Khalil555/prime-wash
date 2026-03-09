import ReviewCard from "../layouts/ReviewCard";
import sophiaAzura from "../assets/img/pic1.png";
import johnDeo from "../assets/img/pic2.png";
import victoriaZoe from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={sophiaAzura} name="Sophia Azura">
          PrimeWash delivered excellent service and outstanding results. My car
          looked brand new, staff were professional, friendly, and efficient,
          and the overall experience exceeded my expectations completely from
          start to finish.
        </ReviewCard>
        <ReviewCard img={johnDeo} name="John Deo">
          PrimeWash is my go to car wash service. Consistent results, great
          customer support, and careful cleaning make them reliable,
          trustworthy, and worth recommending to anyone who values quality car
          care.
        </ReviewCard>
        <ReviewCard img={victoriaZoe} name="Victoria Zoe">
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
