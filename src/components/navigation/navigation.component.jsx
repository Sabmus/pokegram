import { NavigationDiv } from "./navigation.styles";

function Navigation({ children, onClickHandler }) {
  return <NavigationDiv onClick={onClickHandler}>{children}</NavigationDiv>;
}

export default Navigation;
