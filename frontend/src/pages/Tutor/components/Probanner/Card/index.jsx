function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-lightPrimary bg-clip-border shadow-3xl shadow-shadow-500  ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
