import { Input } from '@nextui-org/react';
import React, { useState } from 'react';

const FormInput = ({ title, setInput,isRequired }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="basis-1/2 text-right px-10 py-2">{title}:</div>
      <div className="basis-1/2 px-10 py-2">
        <Input
          isRequired={isRequired}
          type="name"
          defaultValue=""
          onChange={handleChange}
          classNames={{
            input:
              'focus:outline-none border-transparent focus:border-transparent focus:ring-0',
          }}
        />
      </div>
    </div>
  );
};

export default FormInput;
