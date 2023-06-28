import Card from "../card/index";

const Widget = ({ icon,title}) => {
  return (
    <Card extra="items-center rounded-full pr-4  ">
      <div className="ml-[18px] flex h-[80px] w-[50px] flex-row items-center gap-2 ">
          <span className="flex items-center text-white cursor-pointer  ml-2.5 group-hover:-mx-5 transition-all duration-300  ">
            {icon}
          </span>
            <h4 className=" relative left-[20px] text-xl font-bold text-white cursor-pointer opacity-0 group-hover:opacity-100 transition duration-100 ">{title}</h4>
      </div>

    </Card>
  );
};

export default Widget;
