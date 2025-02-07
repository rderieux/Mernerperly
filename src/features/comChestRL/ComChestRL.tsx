import chestImage from "../../assets/chest.png";
import "./ComChestRL.css";

export default function ComChestRL() {
  return (
    <>
      <div className="com-chestrl">
        <div className="com-chestrl-name">COMMUNITY</div>
        <div className="chest">
          <img src={chestImage} alt="Treasure Chest" />
        </div>
        <div className="com-chestrl-inst">INSTRUCTIONS</div>
      </div>
    </>
  );
}
