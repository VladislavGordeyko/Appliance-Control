import React from 'react';

/** Interface for component */
interface ILeftMenu{
  /** Menu items */
  menuItems: string[],

  /** Active menu item index */
  activeIndex: number,

  /** Fucntion on click to item */
  onPress: (index: number) => void
}

/** Main left menu component */
const LeftMenu = ({ menuItems, activeIndex, onPress }: ILeftMenu) => (
  <div className="flex flex-col py-5 fixed w-52 h-full text-lg text-white bg-gray-300 text-center shadow-md">
    {menuItems.map((item, idx) => (
      <div
        key={idx.toString()}
        className={`h-12 justify-center flex ${activeIndex !== idx ? '' : 'bg-gray-600'} hover:bg-gray-400`}
      >
        <button
          type="button"
          onClick={() => onPress(idx)}
          className={activeIndex !== idx ? 'opacity-30' : 'text-white'}
        >
          {item}
        </button>
      </div>
    ))}
  </div>
);

export default LeftMenu;
