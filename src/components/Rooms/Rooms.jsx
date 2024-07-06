import { useSelector } from "react-redux";


const Rooms = () => {
    const {rooms} = useSelector((state)=>state.room);
    console.log(rooms);

    return (
        <>
           <h1>Rooms component</h1> 
        </>
    );
};

export default Rooms;