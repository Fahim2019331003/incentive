'use client';
import { Radio, RadioGroup, cn } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'inline-flex flex-grow m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-3 p-3 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        ),
      }}
    >
      {children}
    </Radio>
  );
};

const CustomRadioGroup = ({selectedOption,setSelectedOption}) => {
  
  const [roleList, setRoleList] = useState(["APPLICANT","EVALUATOR","COORDINATOR","ADMIN"]);
  const [isLoading, setLoading] = useState(0);

  // useEffect(() => {
  //   console.log("Hello");
  //   console.log(selectedOption);

  // }, [])
  

  return (
    <RadioGroup
      value={selectedOption}
      onValueChange={setSelectedOption}
      size="sm"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {roleList.length == 0 && <div>No Elements</div>}
          {roleList.map((item: any) => (
            <div key={item} className="text-sm flex flex-grow">
              <CustomRadio value={item}>
                {item ==="ADMIN" && ( <div>Admin</div>)}
                {item ==="EVALUATOR" && ( <div>Evaluator</div>)}
                {item ==="COORDINATOR" && ( <div>Coordinator</div>)}
                {item ==="APPLICANT" && ( <div>Applicant</div>)}
              </CustomRadio>
            </div>
          ))}
        </div>
      )}
    </RadioGroup>
  );
};
export default CustomRadioGroup;
