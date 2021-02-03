import React from 'react';

/** Interface for component */
interface ISelectInput<T> {
  /** Select placeholder */
  placeholder: string,

  /** Current value */
  value: T,

  /** Select options */
  values: T[],

  /** Function on change value */
  onChange: (value: T) => void,

  /** Get item title */
  getItemTitle: (item: T) => string;
}

/** Custom select input */
function SelectInput<T>({
  values, placeholder, value, onChange, getItemTitle,
} :ISelectInput<T>) {
  return (
    <div className="w-full bg-gray-100 rounded-md border-gray-300 border border-opacity-60 my-4">
      <select
        placeholder={placeholder}
        value={getItemTitle && getItemTitle(value)}
        onChange={(e: any) => onChange(e.target.value)}
        className="bg-transparent w-full pl-4 py-1"
      >
        {values.map((item, idx) => (
          <option
            key={idx.toString()}
            value={getItemTitle && getItemTitle(item)}
          >
            {getItemTitle && getItemTitle(item)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
