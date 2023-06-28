import Card from "../Card/index";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px] w-[10rem] hover:bg-lightPrimary  ">
      <div className="ml-[18px] flex h-[60px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary -p-1">
          <span className="flex items-center text-brand-500">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-md font-bold text-navy-700">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
