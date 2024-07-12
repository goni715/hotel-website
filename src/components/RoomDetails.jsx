import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CheckIn from './Check/CheckIn';
import CheckOut from './Check/CheckOut';
import AdultsDropdown from './AdultsDropdown';
import KidsDropdown from './KidsDropdown';
import { FaCheck } from "react-icons/fa";


const RoomDetails = () => {
    const {id} = useParams();
    const {rooms} = useSelector((state)=>state.room);

    //get room
    const room = rooms.find((room)=> room.id === Number(id));
    

    //destructure room
    const {name, description, facilities, imageLg, price} = room;

    return (
      <>
        <section className="">
          {/* banner */}
          <div className="bg-room h-[560px] bg-cover bg-center relative flex justify-center items-center px-6">
            {/*overlay*/}
            <div className="absolute w-full h-full bg-black/70"></div>
            {/* title */}
            <h1 className="text-5xl md:text-6xl text-white z-20 font-primary text-center">
              {name} Details
            </h1>
          </div>

          <div className="container lg:w-[80%]">
            <div className="flex flex-col lg:flex-row h-full py-24">
              {/* left */}
              <div className="w-full h-full lg:w-[60%] px-6">
                <h2 className="h2">{name}</h2>
                <p className="mb-8 text-justify">{description}</p>
                <img className="mb-8 w-full" src={imageLg} alt="room_details_img" />
                {/*facilities*/}
                <div className="mt-12">
                  <h3 className="h3 mb-3">Room Facilities</h3>
                  <p className="mb-12 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    iste in cupiditate esse, laboriosam sapiente laudantium
                    molestiae, ipsam adipisci labore saepe totam repellendus
                    error officia beatae! Nostrum, libero! Explicabo,
                    architecto?
                  </p>
                  {/* grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {facilities?.map((item, index) => {
                      //destructure item
                      const { name, icon } = item;
                      return (
                        <>
                          <div
                            key={index}
                            className="flex items-center gap-x-3"
                          >
                            <div className="text-3xl text-accent">{icon}</div>
                            <div className="text-base">{name}</div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="w-full h-full lg:w-[40%] px-4">
                {/*reservation*/}
                <div className="py-8 px-6 bg-accent/20 mb-12">
                  <div className="flex flex-col space-y-4 mb-4">
                    <h3 className="">Your Reservation</h3>
                    <div className="h-[60px] w-full">
                      <CheckIn />
                    </div>
                    <div className="h-[60px]">
                      <CheckOut />
                    </div>
                    <div className="h-[60px]">
                      <AdultsDropdown />
                    </div>
                    <div className="h-[60px]">
                      <KidsDropdown />
                    </div>
                  </div>
                  <button className="btn btn-lg btn-primary w-full">
                        book now for ${price}
                    </button>
                </div>
                {/* rules */}
                <div className="">
                    <h3 className="h3">Hotel Rules</h3>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi beatae eos.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-x-4">
                            <FaCheck/>
                            Check-in: 3.00 PM - 9:00 PM
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck/>
                            Check-out: 10:30 PM
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck/>
                            No Pets
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck/>
                            No Smoking
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default RoomDetails;