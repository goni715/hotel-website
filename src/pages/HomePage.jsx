import Header from "./../components/Header";
import Rooms from "../components/Rooms/Rooms";
import BookForm from "./../components/BookForm";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
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
      <Header />
      <HeroSlider />
      <BookForm />
      <Rooms />
      <Footer/>
    </>
  );
};

export default HomePage;
