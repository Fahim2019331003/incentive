'use client';
import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

const FormMultiInput = ({ title,setInput }) => {
  const [textFields, setTextFields] = useState([{ id: 0, value: '' }]);
  const [numTextFields, setNumTextFields] = useState(1);
  const [totalField, setTotalField] = useState(1);

  const handleAddTextField = () => {
    // {
    //   console.log(textFields);
    // }
    setTextFields([...textFields, { id: numTextFields, value: '' }]);
    setInput(
      textFields.map((field)=> field.value)
    )
    setNumTextFields(numTextFields + 1);
    setTotalField(totalField + 1);
  };

  const handleRemoveTextField = (idToRemove) => {
    const values=textFields.filter(({ id }) => id !== idToRemove)
    setTextFields(values);
    setInput(
      values.map((field)=> field.value)
    )
    setTotalField(totalField - 1);
  };
  const handleChange = (id, value) => {
    setTextFields(
      textFields.map((field) => (field.id === id ? { ...field, value } : field))
    );

    setInput(
      textFields.map((field)=> field.value)
    )
  };

  return (
    <div className="flex justify-center items-center">
      <div className="basis-1/2 text-right px-10 py-2">{title}:</div>
      <div className="basis-1/2 px-10 py-2">
        {textFields.map(({ id }, index) => (
          <div className=" flex items-center py-2" key={id}>
            <div className="mr-2">{index + 1}</div>
            <Input
              isRequired
              type="name"
              defaultValue=""
              onChange={(e) => handleChange(id, e.target.value)}
              classNames={{
                input:
                  'focus:outline-none border-transparent focus:border-transparent focus:ring-0',
              }}
            />

            <div className="ml-2">
              <Button
                isIconOnly
                className="bg-gray-200"
                onClick={() => handleRemoveTextField(id)}
              >
                <Image
                  src={'/icons/sign.png'}
                  alt="new"
                  width={40}
                  height={40}
                ></Image>
              </Button>
            </div>
          </div>
        ))}
        <div className="ml-5 pt-2">
          <Button
            isIconOnly
            className="bg-gray-200"
            onClick={handleAddTextField}
          >
            <Image
              src={'/icons/new-user.png'}
              alt="new"
              width={40}
              height={40}
            ></Image>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormMultiInput;
