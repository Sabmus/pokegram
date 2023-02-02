import { FollowerNotification, FollowerRequest } from "./notification.styles";

import Navigation from "../../../../components/navigation/navigation.component";
import { svgObj } from "../../../../data/svg";

function Notification() {
  return (
    <>
      <FollowerNotification>
        <h2>Notifications</h2>
      </FollowerNotification>
      <FollowerRequest>
        <Navigation>
          <span>img</span>
          <span style={{ flexGrow: 1 }}>Follower's request</span>
          <span>{svgObj.gt.solid}</span>
        </Navigation>
      </FollowerRequest>
    </>
  );
}

export default Notification;
