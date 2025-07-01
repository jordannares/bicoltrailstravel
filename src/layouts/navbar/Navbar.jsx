import { Link } from "react-router-dom";
import routes from "../../data/Navigation";
import logo from "../../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

console.log(routes);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className=" w-full sticky z-10 top-0 bg-white/50 backdrop-blur-sm">
      <div className="px-4">
        <nav className="relative max-container mx-auto flex flex-row items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="flex-1">
              <img className="size-20 shrink-0 w-[250px]" src={logo} alt="" />
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
                  className="uppercase text-sm transition hover:text-[#FF5652]"
                  key={route.id}
                  to={route.path}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            <button className="hidden md:flex uppercase text-white text-sm bg-[#FF5652] px-4 py-3 rounded-4xl cursor-pointer transition hover:scale-110">
              Book Now!
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
    </header>
  );
};

export default Navbar;
