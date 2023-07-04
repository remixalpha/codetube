import Widget from "../widget/Widget";
import { MdAdd } from "react-icons/md";

const Btn = () => {
  return (
    <div className="" >
      {/* Card widget */}

       
      <Widget 
          icon={<MdAdd className="h-7 w-7  " />}
           title={"Add"}
        //   subtitle={"All"}
        />
      </div>

  );
};

export default Btn;
