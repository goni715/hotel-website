import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css';
import { BsCalendar } from "react-icons/bs";


const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
    return (
      <>
        <div className="relative w-full flex items-center justify-end h-full ">
          {/* icon */}
          <div className="absolute z-10 pr-8">
            <div>
              <BsCalendar className="text-accent text-base"/>
            </div>
          </div>
          <DatePicker
            className="w-full h-full"
            selected={startDate}
            placeholderText="Check in"
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </>
    );
};

export default CheckIn;