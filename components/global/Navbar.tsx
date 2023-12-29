"use client";
import { colors } from "@/constants/colors";
import { ButtonIcon } from ".";
import useMode, { useModeType } from "@/hooks/useMode";
import Link from "next/link";

const Navbar = () => {
  const { isDark, setDarkMode, setLightMode } = useMode() as useModeType;

  const darkModeHandler = () => {
    if (isDark) {
      return setLightMode();
    } else {
      return setDarkMode();
    }
  };

  return (
    <nav className={`w-full py-3 border-b border-b-gray-200 dark:border-b-0`}>
      <div className="max-w-[80%] sm:max-w-full lg:max-w-[90%] sm:px-3 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          <Link href="/">
            <span className={`text-[20px] font-extrabold ${colors.primary} dark:text-white`}>MOVARY</span>
          </Link>
        </div>
        <div className="flex items-center">
          <ButtonIcon sizeText="text-[13px]" onAction={darkModeHandler} iconClass={isDark ? "ri-sun-line" : "ri-moon-clear-line "} title={isDark ? "Light mode" : "Dark mode"} color={isDark ? "text-white" : colors.title} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
