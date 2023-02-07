import InteractionList from "../interaction-list/interaction-list.component";

import {
  SidebarWrapper,
  NavSpan,
  NavigationWrapper,
  TitleWrapper,
} from "./sidebar.styles";

function Sidebar({ actionList, onToggleExtraSidebar, didWidthChange }) {
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
          onToggleExtraSidebar={onToggleExtraSidebar}
        />
      </NavigationWrapper>
      {/* Options */}
      <div></div>
    </SidebarWrapper>
  );
}

export default Sidebar;
