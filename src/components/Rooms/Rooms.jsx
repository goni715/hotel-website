import { useSelector } from "react-redux";
import Room from './Room';


const Rooms = () => {
    const {rooms} = useSelector((state)=>state.room);
  

    return (
      <>
        <section className="py-24">
          <div className="container lg:w-[80%] lg:px-0">
            {/* grid*/}
            <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
              {rooms?.map((room, i) => {
                return <Room key={i} room={room} />;
              })}
            </div>
          </div>
        </section>
      </>
    );
};

export default Rooms;