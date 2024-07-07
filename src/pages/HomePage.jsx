import Header from './../components/Header';
import Rooms from "../components/Rooms/Rooms";
import BookForm from './../components/BookForm';
import HeroSlider from '../components/HeroSlider';


const HomePage = () => {
   
    return (
        <>
            <Header/>
            <HeroSlider/>
            <BookForm/>
            <Rooms/>
        </>
    );
};

export default HomePage;