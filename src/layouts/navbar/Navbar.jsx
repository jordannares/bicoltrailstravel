import { Link } from "react-router-dom";
import routes from "../../data/Navigation";
import logo from "../../assets/logo/bicoltrailstravel-logo.svg";
import { Menu, X } from "lucide-react";
import { Children, useEffect, useRef, useState } from "react";
import Tabs, { useTabs } from "../../pages/atvtrails/components/Tabs";
import Tablist from "../../pages/atvtrails/components/Tablist";
import TabItem from "../../components/TabItem";
import sections from "../../data/Tabs";
import StickyTab from "../../pages/atvtrails/components/StickyTab";
import Button from "../../components/Button";

// console.log(routes);

const Navbar = ({ defaultTab, activeTabb, sectionsRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showTab = activeTabb === defaultTab;

  // console.log(showTab);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <header className="w-full sticky z-10 top-0 bg-white/50 backdrop-blur-sm ">
      <div className="px-4">
        <nav className="relative  max-container mx-auto flex flex-row items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="flex-1">
              <img className="size-20 shrink-0 w-[230px]" src={logo} alt="" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-10 cursor-pointer"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="flex items-center justify-between space-x-8">
            <div className="hidden md:flex space-x-8">
              {routes.map((route, key) => (
                <Link
                  className="font-semibold text-sm transition hover:text-[#FBA518]"
                  key={route.id}
                  to={route.path}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            <button className="hidden md:flex font-semibold text-white text-sm bg-gray-800 px-4 py-3 rounded-full cursor-pointer transition hover:scale-110">
              Sign in
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="w-full overflow-auto md:hidden bg-white/90 backdrop-blur-2xl h-screen fixed right-0 inset-y-0">
            <div className="h-screen flex flex-col items-center justify-center space-y-1 px-4 pb-3">
              {routes.map((route, key) => (
                <Link
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="py-2 uppercase"
                  key={route.id}
                  to={route.path}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* sticky tabs */}

      <div
        className={`relative transition-all  duration-300 ease-in-out z-[1] shadow-md
          ${showTab ? "h-0 -translate-y-50 opacity-0" : "translate-y-0 "}`}
      >
        <div className="flex items-center justify-center mx-auto max-container border-t-[1px] border-gray-300 pb-2">
          <div className="flex flex-1 flex-wrap justify-start gap-3 pt-2 md:space-y-0">
            <Tabs
              defaultTabbb={activeTabb}
              defaultTab={activeTabb}
              scrollreff={sectionsRef}
            >
              <Tablist>
                {sections.map((s) => (
                  <TabItem
                    scrollref={sectionsRef}
                    key={s.id}
                    id={s.id}
                    activeTabb={activeTabb}
                    title={s.title}
                  >
                    {s.title}
                  </TabItem>
                ))}
              </Tablist>
            </Tabs>
          </div>
          <div className="w-[500px] mx-auto">
            <div className="flex flex-wrap items-center justify-end pt-2 space-x-4">
              <div className=" ">
                <div className=" ">
                  <h3 className="font-bold text-md">
                    Starting from ₱ 1,550.00
                  </h3>
                </div>
              </div>
              <div className=" rounded-full overflow-hidden">
                <Button className="bg-[#A89C29]">
                  Reserve now & pay later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
