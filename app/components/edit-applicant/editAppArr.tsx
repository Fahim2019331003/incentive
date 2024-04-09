'use client';
import { useState } from 'react';

const EditAppArr = ({ title, value, onChange }) => {
  const [info, setInfo] = useState(value);

  const handleInputChange = (index, newValue) => {
    const updatedInfo = [...info];
    updatedInfo[index] = newValue;
    setInfo(updatedInfo);
    onChange(updatedInfo);
  };

  return (
    <div className="flex items-center mb-3">
      <div className="font-semibold text-base w-full md:w-1/4 lg:w-2/5">
        {title}
      </div>
      <div className="text-base w-full md:w-3/4 lg:w-3/5">
        {info.map((author, index) => (
          <div className="text-base mb-1 flex" key={index}>
            <h1 className="font-semibold mr-2 pt-1">{index + 1}.</h1>
            <div className="w-full">
              <input
                onChange={(e) => handleInputChange(index, e.target.value)}
                type="text"
                value={author}
                className="border border-gray-300 rounded-md p-1 w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditAppArr;
