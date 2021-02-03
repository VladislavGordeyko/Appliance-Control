import React from 'react';

/** Interface for component */
interface IButton {
  /** Button child */
  children: React.ReactChild

  /** Function on Button click */
  onClick: () => void

  /** Button type */
  type: 'solid' | 'outline'

  /** Is button disabled */
  disabled?: boolean
}

/** Button default props */
Button.defaultProps = {
  disabled: false,
};

/** Custom Button */
function Button({
  children, onClick, type, disabled,
}:IButton) {
  /** Get type styles */
  const getStyles = () => {
    switch (type) {
      case 'solid': return 'bg-gray-300 rounded-md py-2 w-28 my-1 hover:bg-gray-400';
      case 'outline': return 'w-28 my-1';
      default: return 'bg-gray-300 rounded-md py-2 w-28 my-1';
    }
  };

  return (
    <div>
      <button
        disabled={disabled}
        type="button"
        onClick={onClick}
        className={disabled ? 'bg-gray-200 rounded-md py-2 w-28 my-1' : getStyles()}
      >
        <span className={type === 'solid' ? 'text-white' : 'text-gray-300'}>{children}</span>
      </button>
    </div>
  );
}

export default Button;
