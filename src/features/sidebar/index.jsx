import React from "react";
import { useState } from "react";

import Sidebar from "./components/sidebar/sidebar.component";
import ExtraSidebar from "./components/extra-sidebar/extra-sidebar.component";

import { actions } from "../../data/actions";
import { FixedSideWrapper } from "./assets/styles";

function SidebarParent() {
  const [toggleExtraSidebar, setToggleExtraSidebar] = useState("");
  const [didWidthChange, setDidWidthChange] = useState(false);

  const actionList = actions;

  const handleWidthChange = (title) => {
    if (!toggleExtraSidebar) {
      setDidWidthChange(!didWidthChange);
    }
    if (toggleExtraSidebar && toggleExtraSidebar === title) {
      setDidWidthChange(!didWidthChange);
    }
  };

  const handleOnToggleExtraSidebar = (title) => {
    setToggleExtraSidebar(title);
    handleWidthChange(title);
  };

  return (
    <FixedSideWrapper>
      <Sidebar
        actionList={actionList}
        onToggleExtraSidebar={handleOnToggleExtraSidebar}
        didWidthChange={didWidthChange}
      />
      <ExtraSidebar
        selection={toggleExtraSidebar}
        didWidthChange={didWidthChange}
      />
    </FixedSideWrapper>
  );
}

export default SidebarParent;
