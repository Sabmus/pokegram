import Search from "../search/search.component";
import Notification from "../notification/notification.component";

import useClickOutside from "../../../../hooks/clickOutside";

import {
  SideBarHiddenWrapper,
  ExtraSidebarFrame,
} from "./extra-sidebar.styles";

function ExtraSidebar({
  toggleSearch,
  toggleNotifications,
  didWidthChange,
  closeExtraSidebar,
}) {
  const domNode = useClickOutside(closeExtraSidebar);

  const componentToRender = toggleSearch ? (
    <Search closeExtraSidebar={closeExtraSidebar} />
  ) : toggleNotifications ? (
    <Notification closeExtraSidebar={closeExtraSidebar} />
  ) : (
    <div></div>
  );

  return (
    <SideBarHiddenWrapper didWidthChange={didWidthChange}>
      <ExtraSidebarFrame ref={domNode}>{componentToRender}</ExtraSidebarFrame>
    </SideBarHiddenWrapper>
  );
}

export default ExtraSidebar;
