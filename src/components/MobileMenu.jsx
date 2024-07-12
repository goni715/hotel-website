import LogoDark from "../assets/images/logo-dark.svg";
import { Link } from "react-router-dom";


const MobileMenu = ({showMenu}) => {

    return (
      <>
        <div
          className={`${
            showMenu ? "left-0" : "-left-[100%]"
          } fixed top-0 bottom-0 h-screen z-[100] flex w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 md:hidden transition-all duration-500 rounded-r-xl shadow-md`}
        >
          <div className="card">
            <Link to="/" className="flex items-center justify-start gap-3">
              <img src={LogoDark} alt="logo_white" />
            </Link>
            <nav className="nav-items mt-12">
              <ul className="space-y-4 text-xl font-condensed uppercase">
                <Link to="/" className="cursor-pointer hover:text-accent transition">
                  Home
                </Link>
                <h1 className="cursor-pointer hover:text-accent transition">
                  Rooms
                </h1>
                <h1 className="cursor-pointer hover:text-accent transition">
                Resturant
                </h1>
                <h1 className="cursor-pointer hover:text-accent transition">
                  Spa
                </h1>
                <h1 className="cursor-pointer hover:text-accent transition">
                 Contact
                </h1>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
};

export default MobileMenu;