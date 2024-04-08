'use client';
import getReviewersData from '@/app/actions/getReviewersData';
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
  
  const [reviewerList, setReviewerList] = useState([]);
  const [isLoading, setLoading] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await getReviewersData();
        console.log(response);
        setReviewerList(response);
        setLoading(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
          {reviewerList.length == 0 && <div>No Elements</div>}
          {reviewerList.map((item: any) => (
            <div key={item.id} className="text-sm flex flex-grow">
              <CustomRadio description={item.email} value={item.email}>
                {item.name}
              </CustomRadio>
            </div>
          ))}
        </div>
      )}
    </RadioGroup>
  );
};
export default CustomRadioGroup;
