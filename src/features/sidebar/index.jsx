import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import Options from "./components/options/options.component";
import SidebarInteractiveLayout from "./layout/layout.component";
import Search from "./components/search/search.component";
import Notification from "./components/notification/notification.component";

import routes from "../../data/routes";
import SVG from "../../components/svg/svg.component";
import { svgObj } from "../../data/svg";

import {
  FixedSideWrapper,
  SidebarWrapper,
  NavigationWrapper,
  TitleWrapper,
  NavSpan,
  SideBarHiddenWrapper,
} from "./assets/styles";

function Sidebar() {
  const [showOptions, setShowOptions] = useState(false);
  const [reduceSidebar, setReduceSidebar] = useState(false);
  const [renderSidePanel, setRenderSidePanel] = useState("");

  const onClickShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const onClickReduceSidebar = (title) => {
    if (reduceSidebar && renderSidePanel !== title) {
      setRenderSidePanel(title);
    } else {
      setReduceSidebar(!reduceSidebar);
      setRenderSidePanel(title);
    }
  };

  const onClickCloseSidebar = () => {
    setReduceSidebar(false);
  };

  return (
    <FixedSideWrapper>
      <SidebarWrapper didWidthChange={reduceSidebar.toString()}>
        {/* Title */}
        <TitleWrapper>
          <NavSpan didWidthChange={reduceSidebar.toString()}>
            <h3>Pokegram</h3>
          </NavSpan>
        </TitleWrapper>
        {/* Navigation */}
        <NavigationWrapper>
          {routes.map((route) => (
            <Link to={route.path} key={route.title}>
              <Navigation
                onClickHandler={
                  route.interactive
                    ? () => onClickReduceSidebar(route.title)
                    : onClickCloseSidebar
                }
              >
                <span>
                  <SVG
                    path={route.svgPath}
                    color={"var(--on-background)"}
                    fill={"var(--on-background)"}
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  />
                </span>
                <NavSpan didWidthChange={reduceSidebar.toString()}>
                  {route.title}
                </NavSpan>
              </Navigation>
            </Link>
          ))}
        </NavigationWrapper>
        {/* Options */}
        <div>
          <Options showOptions={showOptions} />
          <Navigation onClickHandler={onClickShowOptions}>
            <span>
              <SVG
                path={svgObj.parallel.svgChildren}
                color={"var(--on-background)"}
                fill={"var(--on-background)"}
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              />
            </span>
            <NavSpan didWidthChange={reduceSidebar.toString()}>Mas</NavSpan>
          </Navigation>
        </div>
      </SidebarWrapper>
      <SideBarHiddenWrapper didWidthChange={reduceSidebar.toString()}>
        <SidebarInteractiveLayout>
          {renderSidePanel === "Search" ? (
            <Search />
          ) : renderSidePanel === "Notifications" ? (
            <Notification />
          ) : (
            <div></div>
          )}
        </SidebarInteractiveLayout>
      </SideBarHiddenWrapper>
    </FixedSideWrapper>
  );
}

export default Sidebar;
