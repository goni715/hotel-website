import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const RoomDetails = () => {
    const {id} = useParams();
    const {rooms} = useSelector((state)=>state.room);

    //get room
    const room = rooms.find((room)=> room.id === Number(id));
    

    //destructure room
    const {name, description, facilities, imageLg} = room;

    return (
        <>
           <section className="">
             {/* banner */}
             <div className="bg-room h-[560px] bg-cover bg-center relative flex justify-center items-center">
                {/*overlay*/}
                <div className="absolute w-full h-full bg-black/70">
                </div>
                {/* title */}
                <h1 className="text-6xl text-white z-20 font-primary text-center">
                    {name} Details
                </h1>
             </div>

             <div className="container lg:w-[80%]">
                <div className="flex flex-col lg:flex-row h-full py-24">
                    {/* left */}
                    <div className="w-full h-full lg:w-[60%] px-6 bg-yellow-100">
                        <h2 className="h2">{name}</h2>
                        <p className="mb-8">{description}</p>
                        <img className="mb-8" src={imageLg} alt="room_details_img" />
                        {/*facilities*/}
                        <div className="mt-12">
                            <h3 className="h3 mb-3">Room Facilities</h3>
                            <p className="mb-12">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iste in cupiditate esse, laboriosam sapiente laudantium molestiae, ipsam adipisci labore saepe totam repellendus error officia beatae! Nostrum, libero! Explicabo, architecto?
                            </p>
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-full h-full lg:w-[40%]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis velit ut pariatur iusto doloribus sunt nihil, aspernatur nesciunt id quam.
                    </div>
                </div>
             </div>
           </section>  
        </>
    );
};

export default RoomDetails;