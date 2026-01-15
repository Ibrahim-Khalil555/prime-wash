const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-red-600 text-black hover:bg-red-600 hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
