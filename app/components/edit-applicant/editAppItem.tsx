'use client';
import { useState } from 'react';

const EditAppItem = ({ title, value, onChange }) => {
  const [info, setInfo] = useState(value);
  
  const handleInputChange = (e) => {
    setInfo(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className="flex items-center mb-4 ">
      <div className="font-semibold text-base w-full md:w-1/4 lg:w-2/5">{title}</div>
      <input
        onChange={handleInputChange}
        type="text"
        value={info}
        className="border border-gray-300 w-full md:w-3/4 lg:w-3/5 rounded-md p-1"
      />
    </div>
  );
};

export default EditAppItem;
