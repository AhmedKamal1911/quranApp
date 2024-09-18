import { NavLink } from "react-router-dom";

import { logo } from "@/assets";
import { links } from "@/data";
import { twMerge } from "tailwind-merge";

const Aside = ({ className }) => {
  return (
    <>
      <div
        className={twMerge(
          "md:z-[10] z-[50] sticky bg-[#151c41c9] bg-opacity-75 backdrop-blur-lg  top-0 w-[200px] h-screen items-start py-2 md:bg-[#191624] smooth-transition",
          className
        )}
      >
        <NavLink to={"/"} className="block w-14 m-auto">
          <img
            src={logo}
            alt="logo-img"
            className="w-full h-full object-contain"
          />
        </NavLink>
        <h2 className="text-white font-bold text-3xl text-center tracking-[12px] my-4">
          بۤيۜاُنۗ
        </h2>
        <div className="flex flex-col gap-4">
          {links.map((item) => (
            <NavLink
              end
              className={({ isActive }) => {
                const baseClass =
                  "text-lg font-medium text-white hover:text-[#3ef8a1] flex items-center bg-[#8829c769] rounded-md p-2";
                return isActive ? `text-[#3ef8a1] ${baseClass}` : baseClass;
              }}
              key={item.name}
              to={item.to}
            >
              <item.icon className="w-6 h-6 ml-2" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Aside;
