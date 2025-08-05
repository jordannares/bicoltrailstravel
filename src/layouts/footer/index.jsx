import { Link } from "react-router-dom";
import logo from "../../assets/logo/bicoltrailstravel-logo.svg";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <section className="">
      <div className="py-20 mt-20">
        <div className="mx-auto max-container flex flex-col">
          <div className="w-full flex flex-col items-center justify-center gap-y-4">
            <Link>
              <img
                className="w-[200px]"
                // src="/src/assets/logo.svg"
                src={logo}
                alt="logo footer"
              />
            </Link>
            <ul className="flex gap-x-8 items-center justify-center text-sm font-semibold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/atv-trails">Atv Trails</a>
              </li>
              <li>
                <a href="/discover">Discover</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-y-4 mt-10">
            <h5 className="text-sm font-semibold text-gray-600">
              Follow and Subscribe
            </h5>
            <div className="flex gap-x-8">
              <Link>
                {/* <img src="/src/assets/icons/facebook-icon.svg" alt="facebook" /> */}
                <Facebook
                  size={40}
                  strokeWidth={1.5}
                  className=" border-[1px] border-[#A89C29] rounded-full text-[#A89C29] p-2 hover:bg-[#A89C29] hover:text-white transition-all ease-in-out"
                />
              </Link>
              <Link>
                {/* <img
                  src="/src/assets/icons/instagram-icon.svg"
                  alt="instagram"
                /> */}
                <Instagram
                  size={40}
                  strokeWidth={1.5}
                  className=" border-[1px] border-[#A89C29] rounded-full text-[#A89C29] p-2 hover:bg-[#A89C29] hover:text-white transition-all ease-in-out"
                />
              </Link>
              <Link>
                {/* <img src="/src/assets/icons/youtube-icon.svg" alt="youtube" /> */}
                <Youtube
                  size={40}
                  strokeWidth={1.5}
                  className=" border-[1px] border-[#A89C29] rounded-full text-[#A89C29] p-2 hover:bg-[#A89C29] hover:text-white transition-all ease-in-out"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-container ">
        <hr className="text-gray-400" />
      </div>
      <div className="py-10">
        <div className="mx-auto max-container ">
          <p className="text-sm font-semibold text-gray-600">
            &copy; 2025 Bicol Trails Travel. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
