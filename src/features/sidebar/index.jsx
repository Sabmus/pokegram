import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import Options from "./components/options/options.component";

import routes from "../../data/routes";
import SVG from "../../components/svg/svg.component";
import { ReactComponent as Parallel } from "../../assets/svg/threeparallel.svg";

import {
  SidebarWrapper,
  NavigationWrapper,
  TitleWrapper,
} from "./assets/styles";

function Sidebar() {
  const [showOptions, setShowOptions] = useState(false);

  const onClickHandler = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
        display: "flex",
      }}
    >
      <SidebarWrapper>
        {/* Title */}
        <TitleWrapper>
          <h3 className="header-title">Pokegram</h3>
        </TitleWrapper>
        {/* Navigation */}
        <NavigationWrapper>
          {routes.map((route) => (
            <Link to={route.path} key={route.title}>
              <Navigation>
                <SVG
                  path={route.svgPath}
                  color={"var(--on-background)"}
                  fill={"var(--on-background)"}
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                />
                <span className="navigation-title">{route.title}</span>
              </Navigation>
            </Link>
          ))}
        </NavigationWrapper>
        {/* Options */}
        <div>
          <Options showOptions={showOptions} />
          <Navigation onClickHandler={onClickHandler}>
            <Parallel />
            <span className="navigation-title">Mas</span>
          </Navigation>
        </div>
      </SidebarWrapper>
    </div>
  );
}

export default Sidebar;
