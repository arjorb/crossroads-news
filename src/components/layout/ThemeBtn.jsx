import { BiSun, BiMoon } from "react-icons/bi";
const ThemeBtn = () => {
  return (
    <div className="w-9 h-9 bg-[#F6F6F7] hover:bg-[#e9e9e9] dark:bg-[#333] dark:hover:bg-[#444] rounded-md cursor-pointer flex items-center justify-center">
      <BiSun size={20} className="text-[#222] dark:text-[#eaeaec]" />
    </div>
  );
};

export default ThemeBtn;
