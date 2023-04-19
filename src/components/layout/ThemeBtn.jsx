import { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
const ThemeBtn = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={handleTheme}
      className="w-9 h-9 bg-[#F6F6F7] hover:bg-[#e9e9e9] dark:bg-[#333] dark:hover:bg-[#444] rounded-md cursor-pointer flex items-center justify-center"
    >
      {theme === "dark" ? <BiSun size={20} className="text-[#eaeaec]" /> : <BiMoon size={20} className="text-[#444]" />}
    </div>
  );
};

export default ThemeBtn;
