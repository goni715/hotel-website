import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";


const Room = ({room}) => {
    const {id, name, image, maxPerson, description, price, size} = room || {};

    return (
      <>
        <div className="bg-white shadow-2xl min-h-[500px] group">
          {/*image*/}
          <div className="overflow-hidden">
            <img
              className="group-hover:scale-110 transition-all duration-300 w-full"
              src={image}
              alt="room"
            />
          </div>

          {/* details */}
          <div className="bg-white shadow-lg max-w-[310px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-condensed tracking-[1px] font-semibold text-base">
            <div className="w-[90%] flex justify-between">
              {/* size */}
              <div className="flex items-center gap-x-2">
                <div className="text-accent">
                  <BsArrowsFullscreen className="text-[15px]" />
                </div>
                <div className="flex gap-x-1">
                  <div>Size</div>
                  <div>{size}m2</div>
                </div>
              </div>
              {/* room capacity */}
              <div className="flex items-center gap-x-2">
                <div className="text-accent">
                  <BsPeople className="text-[18px]" />
                </div>
                <div className="flex gap-x-1">
                  <div>Max People</div>
                  <div>{maxPerson}</div>
                </div>
              </div>
            </div>
          </div>

          {/*name & description*/}
          <div className="text-center">
            <Link to={`/rooms/${id}`}>
              <h3>{name}</h3>
            </Link>
            <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
                {description.slice(0, 56)}
            </p>
          </div>

          {/* btn */}
          <Link to={`/rooms/${id}`} className="btn btn-secondary max-w-[90%] lg:max-w-[80%] btn-sm mx-auto font-primary mb-4">
          Book now from ${price}
          </Link>
        </div>
      </>
    );
};

export default Room;