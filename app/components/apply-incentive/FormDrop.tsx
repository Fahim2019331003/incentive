import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';

const FormDrop = ({ title, options, setKeys }) => {
  const [selectedKeys, setSelectedKeys] = useState('');

  const onChange = (e) => {
    setSelectedKeys(e);
  };

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),

    [selectedKeys]
  );

  useEffect(() => {
    const values = Array.from(selectedKeys).join(', ').replaceAll('_', ' ');
    setKeys(values);
  }, [selectedKeys, setKeys]);

  return (
    <div className="flex justify-center items-center">
      <div className="basis-1/2 text-right px-10 py-2">{title}:</div>
      <div className="basis-1/2 px-10 py-2">
        <Dropdown shouldBlockScroll={false}>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize sm:min-w-[150px] md:min-w-[250px] bg-neutral-100 lg:min-w-[350px]"
            >
              {selectedKeys.length == 0 ? (
                <span>-- Select One --</span>
              ) : (
                <span className="text-green-500 font-medium">
                  {selectedValue}
                </span>
              )}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={onChange}
          >
            {/* <DropdownItem key="Text">Text</DropdownItem> */}
            {options.map((item) => {
              return <DropdownItem key={item}>{item}</DropdownItem>;
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default FormDrop;
