import Widget from "./widget/Widget";
import cover1 from "../../../../assets/img/covers/figma.png";

const Continue = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="cursor-pointer">
        <Widget
          image={
            <img
              src={cover1}
              alt="Cover 1"
              className="h-[40px] w-[50px] rounded-lg"
            />
          }
          title={"Figma"}
          subtitle={"S01 V06"}
          point1={31}
          point2={50}
          point3={5}
          point4={12}
        />
      </div>
    </div>
  );
};

export default Continue;
