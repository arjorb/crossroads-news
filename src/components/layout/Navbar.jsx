import Search from "../search/Search";
import Publisher from "../publisher/Publishers";
import ThemeBtn from "./ThemeBtn";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold cursor-pointer">Crossroads</h1>
        <div className="flex gap-3 items-center">
          <Search />
          <ThemeBtn />
        </div>
      </div>
      <Publisher />
    </div>
  );
};

export default Navbar;
