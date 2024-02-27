'use client';
import { useState } from 'react';
import FormInput from '../components/apply-incentive/FormInput';

const page = () => {

  const [input,setInput] =useState("");

  return (
    <div className="min-h-screen mt-20">
      <FormInput title={'this is my title'} setInput={setInput} />
      <div>
        {input}
      </div>
    </div>
  );
};

export default page;
