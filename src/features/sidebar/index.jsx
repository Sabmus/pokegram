import Navigation from "../../components/navigation/navigation.component";

import routes from "./data/routes";
import SVG from "../../components/svg/svg.component";

import {
  SidebarWrapper,
  NavigationWrapper,
  OptionsWrapper,
} from "./assets/styles";

function Sidebar() {
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
            <Navigation key={route.title} route={route}>
              <SVG title={route.svg} />
            </Navigation>
          ))}
        </NavigationWrapper>
        {/* Options */}
        <OptionsWrapper>||| Mas</OptionsWrapper>
      </SidebarWrapper>
    </div>
  );
}

export default Sidebar;
