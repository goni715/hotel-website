import CheckIn from "./Check/CheckIn";
import Checkout from './Check/CheckOut';
import AdultsDropdown from './AdultsDropdown';
import KidsDropdown from './KidsDropdown';
import { useDispatch } from "react-redux";
import { FilterRooms, SetLoading } from "../redux/features/room/roomSlice";


const BookForm = () => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
      e.preventDefault();
      dispatch(SetLoading(true));

      setTimeout(() => {
        //filter rooms by total(person)
        dispatch(FilterRooms());
        dispatch(SetLoading(false));
      }, 1000);
    };

    return (
        <>
           <div className="container lg:w-[80%] relative">
            <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">
            {/*book form part*/}
              <form className="h-[300px] bg-white w-full lg:h-[70px]">
                <div className="flex flex-col w-full h-full lg:flex-row">
                    <div className="flex-1 border-r">
                        <CheckIn/>
                    </div>
                    <div className="flex-1 border-r">
                        <Checkout/>
                    </div>
                    <div className="flex-1 border-r">
                        <AdultsDropdown/>
                    </div>
                    <div className="flex-1 border-r">
                        <KidsDropdown/>
                    </div>
                    {/* btn */}
                    <button onClick={(e)=>handleClick(e)} type="submit" className="btn btn-primary">Check Now</button>
                </div>
              </form>
            </div>
           </div>
        </>
    );
};

export default BookForm;