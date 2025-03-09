import { NavLink } from "react-router-dom";
//There are two ways to add the style in the NavLink,
//In Link tag, this is not possible
//inNavLink first we can add the style using style tag and secondly we can add the style usig className.
const Navbar = () => {
  return (
    <div className="h-15 w-full flex justify-between items-center px-5 py-3">
      <h1 className="text-4xl font-bold">Logo</h1>
      <div className="gap-4 flex ">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "#a6d0dd" : "#fff",
              fontWeight: e.isActive ? "bold" : "",
            };
          }}
          className="font-semibold text-2xl bg-zinc-100/5 hover:border-[1px] border-zinc-400/10 px-3 py-2 rounded-2xl"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            `font-semibold ${
              e.isActive ? "text-[#a6d0dd]" : "text-white"
            } text-2xl bg-zinc-100/5 hover:border-[1px] border-zinc-400/10 px-3 py-2 rounded-2xl`
          }
          to="/past incidents"
        >
          Past Incidents
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "#a6d0dd" : "#fff",
              fontWeight: e.isActive ? "bold" : "",
            };
          }}
          className="font-semibold text-2xl bg-zinc-100/5 hover:border-[1px] border-zinc-400/10 px-3 py-2 rounded-2xl"
          to="/settings"
        >
          Settings & Configuration
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "#a6d0dd" : "#fff",
              fontWeight: e.isActive ? "bold" : "",
            };
          }}
          className="font-semibold text-2xl bg-zinc-100/5 hover:border-[1px] border-zinc-400/10 px-3 py-2 rounded-2xl"
          to="/login"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
