import { Burger } from "./burger.styles";

function BurgerCheck() {
  return (
    <Burger htmlFor="burger">
      <input id="burger" type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </Burger>
  );
}

export default BurgerCheck;
