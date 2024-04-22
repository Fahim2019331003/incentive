import { isValidUser } from '@/app/actions/checkApplication';
import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';


const FormEmail = ({ title, setInput, selected }) => {
  const [changed, setChanged] = useState(selected);
  const [isValid, setValid] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    //checking if the current email exists.
    const getResponse = async () => {
      try {
        const response = await isValidUser(changed);
        if (response?.data?.name) {
          // console.log(response.data.name);
          setValid(true);
          setName(response.data.name);
        } else {
          setValid(false);
          setName('');
        }
      } catch (err) {
        console.log(err);
      }
    };

    getResponse();
  }, [changed]);

//   useEffect(() => {
//     //checking if the current email exists.
//     const getResponse = async () => {
//       try {
//         const response = await isValidUser(selected);
//         if (response?.data?.name) {
//           // console.log(response.data.name);
//           setValid(true);
//           setName(response.data.name);
//         } else {
//           setValid(false);
//           setName('');
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     getResponse();
//   }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
    setChanged(event.target.value);
  };

  const handleClear = () => {
    setInput('');
    setChanged('');
    setName('');
    setValid(false);
  };

  return (
    <div className="flex justify-center items-center mt-3">
      <div className="font-semibold text-base w-full md:w-1/4 lg:w-2/5">{title}</div>
      <div className="text-base w-full md:w-3/4 lg:w-3/5">
        <Input
          isRequired
          // isClearable
          type="email"
          defaultValue=""
          value={changed}
          onChange={handleChange}
          // onClear={() => handleClear}
          isInvalid={!isValid}
          color={!isValid ? 'danger' : 'success'}
          errorMessage={
            !isValid && 'Please enter a registered email or register new'
          }
          description={isValid && `Name: ${name}`}
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

export default FormEmail;
