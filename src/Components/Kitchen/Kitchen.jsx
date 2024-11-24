import Oven from "../Oven/Oven";
import Sink from "../Sink/Sink";
const Kitchen = () => {
  return (
    <div className="kitchen-container">
      <div className="oven-sink">
        <Oven />
        <Sink />
      </div>
      <div className="kitchen">
        <h1>Kitchen</h1>
      </div>
    </div>
  );
};

export default Kitchen ;
