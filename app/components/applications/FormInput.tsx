import { Input } from '@nextui-org/react';
import React, { useState } from 'react';

const FormInput = ({ title, setInput,isRequired,selected }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="flex justify-center items-center mt-3">
      <div className="font-semibold text-base w-full md:w-1/4 lg:w-2/5">{title}</div>
      
      <div className="text-base w-full md:w-3/4 lg:w-3/5">
        <Input
          isRequired={isRequired}
          type="name"
          defaultValue={selected}
          onChange={handleChange}
          className='max-w-sm'
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
