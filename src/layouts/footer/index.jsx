import { Link } from "react-router-dom";
import logo from "../../assets/logo/bicoltrailstravel-logo.svg";

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
            <ul className="flex gap-x-8 items-center justify-center">
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
            <h5 className="text-sm">Follow and Subscribe</h5>
            <div className="flex gap-x-8">
              <Link>
                <img src="/src/assets/icons/facebook-icon.svg" alt="facebook" />
              </Link>
              <Link>
                <img
                  src="/src/assets/icons/instagram-icon.svg"
                  alt="instagram"
                />
              </Link>
              <Link>
                <img src="/src/assets/icons/youtube-icon.svg" alt="youtube" />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto text-start max-container grid grid-cols-1 lg:grid-cols-4 ">
          <div>
            <h1>About Bicol Tour</h1>
            <ul className="text-sm">
              <li>About</li>
              <li>Press</li>
              <li>Resources and Policies</li>
            </ul>
          </div>
          <div>
            <h1>Explore</h1>
            <ul className="text-sm">
              <li>Write a review</li>
              <li>Join</li>
              <li>Add a Place</li>
            </ul>
          </div>
          <div>
            <h1>Do Business With Us</h1>
            <ul className="text-sm">
              <li>Owners</li>
              <li>Business Advantage</li>
            </ul>
          </div>
          <div>
            <h1>Tripadvisor Sites</h1>
            <ul className="text-sm">
              <li>iPhopne App</li>
              <li>Android App</li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="py-10">
        <div className="mx-auto max-container ">
          <p className="text-sm">
            &copy; 2025 Bicol Trails Travel. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
