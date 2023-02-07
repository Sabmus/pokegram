import Search from "../search/search.component";
import Notification from "../notification/notification.component";

import {
  SideBarHiddenWrapper,
  ExtraSidebarFrame,
} from "./extra-sidebar.styles";

function ExtraSidebar({ selection, didWidthChange }) {
  const componentToRender =
    selection === "Search" ? (
      <Search />
    ) : selection === "Notifications" ? (
      <Notification />
    ) : (
      <div></div>
    );

  return (
    <SideBarHiddenWrapper didWidthChange={didWidthChange}>
      <ExtraSidebarFrame>{componentToRender}</ExtraSidebarFrame>
    </SideBarHiddenWrapper>
  );
}

export default ExtraSidebar;
