import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { SetAdults } from "../redux/features/room/roomSlice";

const list = [
  { name: "1 adult" },
  { name: "2 adults" },
  { name: "3 adults" },
  { name: "4 adults" },
];

const AdultsDropdown = () => {
  const {adults} = useSelector((state)=>state.room);
  const dispatch = useDispatch();

  return (
    <>
      <Menu as="div" className="w-full h-full bg-white relative">
        {/* btn */}
        <MenuButton className="w-full h-full flex items-center justify-between px-8">
          {adults}
          <BsChevronDown className="text-base text-accent-hover" />
        </MenuButton>

        {/* menu items */}
        <MenuItems as="ul" className="bg-white absolute w-full z-40 flex flex-col">
          {list?.map((item, i) => {
            return (
              <MenuItem
                key={i}
                onClick={()=>{
                  dispatch(SetAdults(item.name))
                }}
                as="li"
                className="cursor-pointer border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center transition"
              >
                {item?.name}
              </MenuItem>
            );
          })}
        </MenuItems>
      </Menu>
    </>
  );
};

export default AdultsDropdown;
