import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
  } from '@nextui-org/react';
  import { useEffect, useMemo, useState } from 'react';
  
  const FormDrop = ({ title, options, setKeys, selected }) => {
    const [selectedKeys, setSelectedKeys] = useState(selected);
  
    const onChange = (e) => {
      setSelectedKeys(e);
    };
  
    const selectedValue = useMemo(
      () => Array.from(selectedKeys).join(''),
  
      [selectedKeys]
    );
  
    useEffect(() => {
      const values = Array.from(selectedKeys).join('');
      setKeys(values);
    }, [selectedKeys, setKeys]);
  
    return (
      <div className="flex justify-center items-center mt-3">
        <div className="font-semibold text-base w-full md:w-1/4 lg:w-2/5">{title}</div>
        <div className="text-base w-full md:w-3/4 lg:w-3/5">
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
  