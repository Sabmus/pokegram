import { ReactComponent as Compass } from "../../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../../assets/svg/heart.svg";
import { ReactComponent as House } from "../../assets/svg/house.svg";
import { ReactComponent as Message } from "../../assets/svg/message.svg";
import { ReactComponent as Magnifier } from "../../assets/svg/magnifier.svg";
import { ReactComponent as Plus } from "../../assets/svg/plus.svg";
import { ReactComponent as Reel } from "../../assets/svg/reel.svg";

function SVG({ title }) {
  switch (title) {
    case "compass":
      return <Compass />;
    case "heart":
      return <Heart />;
    case "house":
      return <House />;
    case "message":
      return <Message />;
    case "magnifier":
      return <Magnifier />;
    case "plus":
      return <Plus />;
    case "reel":
      return <Reel />;
    case "profile":
      return <House />;
    default:
      <House />;
  }
}

export default SVG;
