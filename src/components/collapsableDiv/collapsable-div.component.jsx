import { useState } from "react";
import { CollapsableWrapper } from "./collapsable-div.styles";

function CollapsableDiv(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleTransition = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <CollapsableWrapper
      onClick={handleTransition}
      width={props.width}
      height={props.height}
      transition={props.transition}
    >
      {props.children}
    </CollapsableWrapper>
  );
}

export default CollapsableDiv;
