import React from 'react';

/** Interface for component */
interface ITextInput {
  /** Input placeholder */
  placeholder: string,

  /** Input value */
  value?: string,

  /** Function on change value */
  onTextChange: (value: string) => void

  /** Input type */
  type?: 'number'| 'text'
}

/** Input default props */
TextInput.defaultProps = {
  value: '',
  type: 'text',
};

/** Custom text input */
function TextInput({
  placeholder, value, onTextChange, type,
}: ITextInput) {
  return (
    <div className="w-full bg-gray-100 rounded-md border-gray-300 border border-opacity-60 my-4">
      <input
        type={type}
        className="bg-transparent w-full pl-4 py-1"
        placeholder={placeholder}
        value={value === null ? '' : value}
        onChange={(e) => onTextChange && onTextChange(e.currentTarget.value)}
      />
    </div>
  );
}

export default TextInput;
