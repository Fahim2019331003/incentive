'use client';
import { useState } from 'react';

const EditProfileItem = ({ title, value, onChange }) => {
  const [info, setInfo] = useState(value);

  const handleInputChange = (e) => {
    setInfo(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="flex mb-1">
      <div className="font-semibold w-32">{title}</div>
      <input
        onChange={handleInputChange}
        type="text"
        value={info}
        className="border border-gray-300 w-unit-9xl rounded-md p-1"
      />
    </div>
  );
};

export default EditProfileItem;
