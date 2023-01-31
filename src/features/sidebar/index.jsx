import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import BurgerCheck from "../../components/burger/burger.component";
import Options from "./components/options/options.component";

import routes from "./data/routes";
import SVG from "../../components/svg/svg.component";

import {
  SidebarWrapper,
  NavigationWrapper,
  OptionsWrapper,
} from "./assets/styles";

function Sidebar() {
  const [burgerCheck, setBurgerCheck] = useState(false);

  return (
    <div style={{ height: "100vh", position: "fixed", display: "flex" }}>
      <SidebarWrapper>
        {/* Title */}
        <div>
          <h3>Pokegram</h3>
        </div>
        {/* Navigation */}
        <NavigationWrapper>
          {routes.map((route) => (
            <Link to={route.path} key={route.title}>
              <Navigation>
                <SVG title={route.svg} />
                {route.title}
              </Navigation>
            </Link>
          ))}
        </NavigationWrapper>
        {/* Options */}
        <OptionsWrapper>
          <Options />
          <Navigation>
            <BurgerCheck />
            MAS
          </Navigation>
        </OptionsWrapper>
      </SidebarWrapper>
    </div>
  );
}

export default Sidebar;
