'use client';
import { useState } from 'react';
import FormInput from '../components/apply-incentive/FormInput';

const Page = () => {
  const [input, setInput] = useState('');
  console.log('check');

  return (
    <div className="min-h-screen mt-20">
      <FormInput title={'this is my title'} setInput={setInput} />
      <div>{input}</div>
    </div>
  );
};

export default Page;
