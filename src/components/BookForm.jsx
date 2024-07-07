import CheckIn from "./Check/CheckIn";
import Checkout from './Check/CheckOut';
import AdultsDropdown from './AdultsDropdown';
import KidsDropdown from './KidsDropdown';


const BookForm = () => {
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
                </div>
              </form>
            </div>
           </div>
        </>
    );
};

export default BookForm;