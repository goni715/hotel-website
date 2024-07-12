import { Link } from 'react-router-dom';
import LogoWhite from '../assets/images/logo-white.svg';


const Footer = () => {
    return (
        <>
          <footer className="bg-primary py-12">
            <div className="container lg:w-[80%] text-white flex justify-center sm:justify-between">
                {/* logo */}
                <Link>
                <img className="hidden sm:block" src={LogoWhite} alt="footer_logo-white" />
                </Link>
                Copyright &copy; 2022. All rights reserved.
            </div>
          </footer>
        </>
    );
};

export default Footer;