'use client';
import { isValidUser } from '@/app/actions/checkApplication';
import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FormMultiInput = ({ title, setInput }) => {
  const [textFields, setTextFields] = useState([
    { id: 0, value: '', name: '', isValid: false },
  ]);
  const [numTextFields, setNumTextFields] = useState(1);
  const [totalField, setTotalField] = useState(1);


  ///when + button is clicked.
  const handleAddTextField = () => {
    setTextFields([
      ...textFields,
      { id: numTextFields, value: '', name: '', isValid: false },
    ]);

    setInput(textFields.map((field) => field.value));
    setNumTextFields(numTextFields + 1);
    setTotalField(totalField + 1);
  };

  ///when minus button is clicked.
  const handleRemoveTextField = (idToRemove) => {
    const values = textFields.filter(({ id }) => id !== idToRemove);
    setTextFields(values);
    setInput(values.map((field) => field.value));
    setTotalField(totalField - 1);
  };

  //data changes to the states.
  const setData = (id, value) => {
    setTextFields((prevState) =>
      prevState.map((field) =>
        field.id === id ? { ...field, value: value } : field
      )
    );
    // setInput(textFields.map((field) => field.value));
    // console.log(textFields);
  };

  ///checking and updating if that user exists.
  const setValidation = async (id, value) => {
    try {
      const response = await isValidUser(value);
      if (response?.data?.name) {
        setTextFields((prevState) =>
          prevState.map((field) =>
            field.id === id
              ? { ...field, name: response.data.name, isValid: true }
              : field
          )
        );
      } else {
        setTextFields((prevState) =>
          prevState.map((field) =>
            field.id === id ? { ...field, name: '', isValid: false } : field
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInput(textFields.map((field) => field.value));
  }, [textFields]);

  ///any changes in inputs.
  const handleChange = (id, event) => {
    setData(id, event.target.value);
    setValidation(id, event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="basis-1/2 text-right px-10 py-2">{title}:</div>
      <div className="basis-1/2 px-10 py-2">
        {textFields.map(({ id, name, isValid }, index) => (
          <div className=" flex items-center py-2" key={id}>
            <div className="mr-2">{index + 1}</div>
            <Input
              isRequired
              type="email"
              defaultValue=""
              onChange={(event) => handleChange(id, event)}
              isInvalid={!isValid}
              color={!isValid ? 'danger' : 'success'}
              errorMessage={
                !isValid && 'Please enter a registered email or register new'
              }
              description={isValid && `Name: ${name}`}
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
