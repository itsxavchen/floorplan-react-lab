import Bathroom from "../Bathroom/Bathroom";
import Bedroom from "../Bedroom/Bedroom";
import Kitchen from "../Kitchen/Kitchen";
import Livingroom from "../Livingroom/Livingroom";

const FloorPlan = () => {

  return (
    <div className="floor-plan">
      <div className="left-side">
        <Bedroom bedNum={1}/>
        <Bathroom size="Full"/>
        <Bedroom bedNum={2}/>
      </div>
      <div className="right-side">
        <div className="livingroom-kitchen">
          <Livingroom />
          <Kitchen />
        </div>
        <div className="halfbath-bedroom">
          <Bathroom size="Half"/>
          <Bedroom bedNum={3}/>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
