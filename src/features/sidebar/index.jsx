import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import useClickOutside from "../../hooks/clickOutside";

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
  const [openExtraSidebar, setOpenExtraSidebar] = useState(false);
  const [renderSidePanel, setRenderSidePanel] = useState("");

  const onClickCloseSidebar = () => {
    setOpenExtraSidebar(false);
  };

  const onClickCloseOptions = () => {
    setShowOptions(false);
  };

  const onClickShowOptions = () => {
    setShowOptions(!showOptions);
  };

  //const extraSidebarRef = useClickOutside(onClickCloseSidebar);
  const optionsRef = useClickOutside(onClickCloseOptions);

  const onClickopenExtraSidebar = (title) => {
    if (openExtraSidebar && renderSidePanel !== title) {
      setRenderSidePanel(title);
    } else {
      setOpenExtraSidebar(!openExtraSidebar);
      setRenderSidePanel(title);
    }
  };

  return (
    <FixedSideWrapper>
      <SidebarWrapper didWidthChange={openExtraSidebar.toString()}>
        {/* Title */}
        <TitleWrapper>
          <NavSpan didWidthChange={openExtraSidebar.toString()}>
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
                    ? () => onClickopenExtraSidebar(route.title)
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
                <NavSpan didWidthChange={openExtraSidebar.toString()}>
                  {route.title}
                </NavSpan>
              </Navigation>
            </Link>
          ))}
        </NavigationWrapper>
        {/* Options */}
        <div ref={optionsRef}>
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
            <NavSpan didWidthChange={openExtraSidebar.toString()}>Mas</NavSpan>
          </Navigation>
        </div>
      </SidebarWrapper>
      <SideBarHiddenWrapper didWidthChange={openExtraSidebar.toString()}>
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
