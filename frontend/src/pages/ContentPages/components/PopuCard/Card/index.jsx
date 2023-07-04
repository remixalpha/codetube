function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 group relative flex flex-col rounded-[20px]  bg-white hover:scale-102  hover:shadow-lg  transition-all duration-300  ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
