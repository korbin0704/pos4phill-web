import { Outlet } from "react-router-dom";
import ScrollToAnchor from "./ScrollToAnchor";

const Layout = () => {
  return (
    <div className="layout">
      <ScrollToAnchor />
      <Outlet />
    </div>
  )
};

export default Layout;
