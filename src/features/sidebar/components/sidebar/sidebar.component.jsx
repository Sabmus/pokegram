import InteractionList from "../interaction-list/interaction-list.component";

import {
  SidebarWrapper,
  NavSpan,
  NavigationWrapper,
  TitleWrapper,
} from "./sidebar.styles";

function Sidebar({
  actionList,
  onToggleSearch,
  onToggleNotifications,
  didWidthChange,
}) {
  return (
    <SidebarWrapper didWidthChange={didWidthChange}>
      {/* Title */}
      <TitleWrapper>
        <NavSpan>
          <h3>Pokegram</h3>
        </NavSpan>
      </TitleWrapper>
      {/* Navigation */}
      <NavigationWrapper>
        <InteractionList
          actionList={actionList}
          onToggleSearch={onToggleSearch}
          onToggleNotifications={onToggleNotifications}
        />
      </NavigationWrapper>
      {/* Options */}
      <div></div>
    </SidebarWrapper>
  );
}

export default Sidebar;
