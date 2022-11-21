import { AppBar } from "components/AppBar";
import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};