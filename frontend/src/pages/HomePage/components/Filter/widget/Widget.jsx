import Card from "../Card/index";

const Widget = ({ icon, subtitle, active, onClick }) => {
  return (
    <Card
      className={`flex-row flex items-center rounded-[20px] w-[10.2rem] ${active ? 'bg-navy-700 text-white' : 'bg-white text-navy-700'}`}
      onClick={onClick}
    >
      <div className="ml-[18px] flex h-[60px] w-auto flex-row items-center">
        <div className="rounded-full -p-1">
          <span className="flex items-center">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <h4 className="text-md font-bold">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
