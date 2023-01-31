import { Outlet } from "react-router-dom";

import Sidebar from "./features/sidebar/index";

import { GlobalWrapper } from "./assets/global.styles";

function App() {
  return (
    <GlobalWrapper>
      <Sidebar />
      <div style={{ margin: "0 auto" }}>
        <Outlet />
      </div>
    </GlobalWrapper>
  );
}

export default App;
