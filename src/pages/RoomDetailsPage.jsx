import RoomDetails from '../components/RoomDetails';
import Header from './../components/Header';
import Footer from './../components/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const RoomDetailsPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    return (
        <>
           <Header/>
           <RoomDetails/>
           <Footer/>
        </>
    );
};

export default RoomDetailsPage;