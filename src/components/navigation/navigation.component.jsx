import { Link } from "react-router-dom";

import { NavigationDiv } from "./navigation.styles";

function Navigation({ route, children }) {
  return (
    <NavigationDiv>
      {children}
      <Link to={route.path}>{route.title}</Link>
    </NavigationDiv>
  );
}

export default Navigation;
