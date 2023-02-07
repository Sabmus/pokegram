import React from "react";
import { useState, useEffect } from "react";

import Sidebar from "./components/sidebar/sidebar.component";
import ExtraSidebar from "./components/extra-sidebar/extra-sidebar.component";

import { actions } from "../../data/actions";
import { FixedSideWrapper } from "./assets/styles";

function SidebarParent() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleNotifications, setToggleNotifications] = useState(false);
  const [didWidthChange, setDidWidthChange] = useState(false);

  const actionList = actions;

  useEffect(() => {
    if (toggleSearch || toggleNotifications) {
      setDidWidthChange(true);
    } else {
      setDidWidthChange(false);
    }
  }, [toggleSearch, toggleNotifications]);

  const handleContraryRender = (component) => {
    if (toggleSearch && component === "notification") {
      setToggleSearch(false);
    }
    if (toggleNotifications && component === "search") {
      setToggleNotifications(false);
    }
  };

  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
    handleContraryRender("search");
  };

  const handleToggleNotifications = () => {
    setToggleNotifications(!toggleNotifications);
    handleContraryRender("notification");
  };

  const closeExtraSidebar = () => {
    if (didWidthChange && !(toggleSearch || toggleNotifications)) {
      setDidWidthChange(false);
    }
  };

  return (
    <FixedSideWrapper>
      <Sidebar
        actionList={actionList}
        onToggleSearch={handleToggleSearch}
        onToggleNotifications={handleToggleNotifications}
        didWidthChange={didWidthChange}
      />
      <ExtraSidebar
        toggleSearch={toggleSearch}
        toggleNotifications={toggleNotifications}
        didWidthChange={didWidthChange}
        closeExtraSidebar={closeExtraSidebar}
      />
    </FixedSideWrapper>
  );
}

export default SidebarParent;
