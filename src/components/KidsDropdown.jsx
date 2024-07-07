import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { SetKids } from "../redux/features/room/roomSlice";

const list = [
  { name: "0 Kids" },
  { name: "1 Kid" },
  { name: "2 Kids" },
  { name: "3 Kids" },
  { name: "4 Kids" },
];

const KidsDropdown = () => {
    const {kids} = useSelector((state)=>state.room);
    const dispatch = useDispatch()
  
  return (
    <>
      <Menu as="div" className="w-full h-full bg-white relative">
        {/* btn */}
        <MenuButton className="w-full h-full flex items-center justify-between px-8">
          {kids === "0 Kids" ? "No Kids" : kids}
          <BsChevronDown className="text-base text-accent-hover" />
        </MenuButton>

        {/* menu items */}
        <MenuItems as="ul" className="bg-white absolute w-full z-40 flex flex-col">
          {list?.map((item, i) => {
            return (
              <MenuItem
                onClick={()=>dispatch(SetKids(item?.name))}
                key={i}
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

export default KidsDropdown;
