import { FollowerNotification, FollowerRequest } from "./notification.styles";

import Navigation from "../../../../components/navigation/navigation.component";
import SVG from "../../../../components/svg/svg.component";
import { svgObj } from "../../../../data/svg";

function Notification() {
  return (
    <div>
      <FollowerNotification>
        <h2>Notifications</h2>
      </FollowerNotification>
      <FollowerRequest>
        <Navigation>
          <span>img</span>
          <span style={{ flexGrow: 1 }}>Follower's request</span>
          <span>
            <SVG
              path={svgObj.gt.svgChildren}
              color={"var(--on-background)"}
              fill="none"
              height="24"
              width="24"
              role="img"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            />
          </span>
        </Navigation>
      </FollowerRequest>
    </div>
  );
}

export default Notification;
