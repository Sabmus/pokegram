import React from "react";

import { LayoutWrapper } from "./layout.styles";

function SidebarInteractiveLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

// const SidebarInteractiveLayout = React.forwardRef((props, ref) => {
//   return <LayoutWrapper ref={ref}>{props.children}</LayoutWrapper>;
// });

export default SidebarInteractiveLayout;
