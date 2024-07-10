import { useEffect, useState } from "react";
import LogoWhite from '../assets/images/logo-white.svg';
import LogoDark from '../assets/images/logo-dark.svg';
import { Link } from "react-router-dom";


const Header = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

    return (
        <>
            <header className={`${sticky ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"} fixed z-50 w-full transition-all duration-500`}>
                <div className="container lg:w-[80%] flex flex-col items-center lg:flex-row lg:justify-between gap-y-6 lg:gap-y-0">
                    {/* logo */}
                    <Link to="/">
                    {sticky ? (
                        <img src={LogoDark} alt="logo_dark" />
                    ): (
                        <img src={LogoWhite} alt="logo_white" />
                    )
                    }
                    </Link>

                    <nav className={`${sticky ? 'text-primary' : 'text-white'} flex items-center gap-x-4 lg:gap-x-8 font-condensed tracking-[3px] text-[15px] uppercase`}>
                        <Link to="" className="hover:text-accent transition">Home</Link>
                        <Link to="" className="hover:text-accent transition">Rooms</Link>
                        <Link to="" className="hover:text-accent transition">Resturant</Link>
                        <Link to="" className="hover:text-accent transition">Spa</Link>
                        <Link to="" className="hover:text-accent transition">Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;