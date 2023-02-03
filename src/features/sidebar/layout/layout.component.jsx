import React from "react";

import { LayoutWrapper } from "./layout.styles";

function SidebarInteractiveLayout({ children, inpuRef }) {
  return <LayoutWrapper ref={inpuRef}>{children}</LayoutWrapper>;
}

// const SidebarInteractiveLayout = React.forwardRef((props, ref) => {
//   return <LayoutWrapper ref={ref}>{props.children}</LayoutWrapper>;
// });

export default SidebarInteractiveLayout;
