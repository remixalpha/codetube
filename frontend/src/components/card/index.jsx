function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={` !z-5 group relative flex flex-col rounded-full bg-navy-700 shadow-3xl shadow-shadow-500  hover:w-[10rem] hover:right-20 transition-all duration-300 ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
