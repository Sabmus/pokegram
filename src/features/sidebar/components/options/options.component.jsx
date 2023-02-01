import { OptionsWrapper } from "./options.styles";

function Options({ showOptions }) {
  return (
    <OptionsWrapper height={showOptions ? "200px" : "0px"}>
      <div className={`${showOptions ? "show" : "not-show"}`}>Aasdasd</div>
    </OptionsWrapper>
  );
}

export default Options;
