function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative group flex flex-col rounded-[30px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 hover:scale-102 hover:w-80  hover:shadow-lg transition-all duration-300  ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
