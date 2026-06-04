import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="m-auto mb-10 flex max-w-[1216px] flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
