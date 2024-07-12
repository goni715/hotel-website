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
      window.scrollTo(0,0);
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
