import { NavigationDiv } from "./navigation.styles";

function Navigation({ children, onClickHandler, ...rest }) {
  return (
    <NavigationDiv onClick={onClickHandler} {...rest}>
      {children}
    </NavigationDiv>
  );
}

export default Navigation;
