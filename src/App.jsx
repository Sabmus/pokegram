import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./features/sidebar/index";
import LoginPage from "./features/login/index";

import { GlobalWrapper } from "./assets/global.styles";
import { LoginWrapper } from "./assets/global.styles";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return (
      <LoginWrapper>
        <LoginPage />
      </LoginWrapper>
    );
  } else {
    return (
      <GlobalWrapper>
        <Sidebar />
        <div style={{ margin: "0 auto" }}>
          <Outlet />
        </div>
      </GlobalWrapper>
    );
  }
}

export default App;
