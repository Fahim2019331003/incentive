'use client';

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';

import getAccountsTableData from '@/app/actions/getAccountsTableData';
import updateAccountTable from '@/app/actions/updateAccountTable';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  CircleArrowDown,
  CircleCheck,
  CircleDollarSign,
  CircleX,
  EllipsisVertical,
  LoaderCircle,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../Loader';
import CustomRadioGroup from './CustomRadioGroup';
import { SearchIcon } from './SearchIcon';

const columns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'department',
    label: 'Department',
  },
  {
    key: 'role',
    label: 'Role',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const AccountsTable = ({ userRole }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  // const [selectedKeysValues, setSelectedKeysValues] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [datas, setDatas] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const hasSearchFilter = Boolean(search);
  const {
    isOpen: isOpenA,
    onOpen: onOpenA,
    onOpenChange: onOpenChangeA,
    onClose: onCloseA,
  } = useDisclosure();
  const {
    isOpen: isOpenB,
    onOpen: onOpenB,
    onOpenChange: onOpenChangeB,
    onClose: onCloseB,
  } = useDisclosure();
  const [reviewers, setReviewers] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await getAccountsTableData('');

        setDatas(response);
        setTableData(response);

        setLoading(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSelectionChange = (newSelectedKeys) => {
    setSelectedKeys(newSelectedKeys);
  };

  const changeSelectionKeys = (e) => {
    setSelectedKeys(e);
  };

  const OnClickHandlerA = () => {
    const values = Array.from(selectedKeys);
    if (values.length == 0) {
      toast.error('No users selected!');
    } else {
      onOpenA();
    }
  };
  const onCloseHandlerA = async () => {
    const values = Array.from(selectedKeys);
    if (
      values.length == 3 &&
      values[0] == 'a' &&
      values[1] == 'l' &&
      values[2] == 'l'
    ) {
      const valueId = datas.map((item: any) => item.id);
      //   console.log(valueId);
      const toastId = toast.loading('Loading...');
      const response = await updateAccountTable(valueId, selectedOption);
      toast.dismiss(toastId);
      if (response.result === 'success') {
        toast.success(response.message);
        setSelectedKeys(new Set([]));
      } else {
        toast.error(response.message);
      }
      const newData: any = await getAccountsTableData('');
      setDatas(newData);
      setTableData(newData);
    } else {
      const valueId = Array.from(selectedKeys);
      //   console.log(valueId);
      const toastId = toast.loading('Loading...');
      const response = await updateAccountTable(valueId, selectedOption);
      toast.dismiss(toastId);
      if (response.result === 'success') {
        toast.success(response.message);
        setSelectedKeys(new Set([]));
      } else {
        toast.error(response.message);
      }
      const newData: any = await await getAccountsTableData('');
      setDatas(newData);
      setTableData(newData);
    }
    onCloseA();
  };

  const OnClickHandlerB = () => {
    const values = Array.from(selectedKeys);
    if (values.length == 0) {
      toast.error('No users selected!');
    } else {
      onOpenB();
    }
  };
  const onCloseHandlerB = async () => {
    if (selectedOption === '') {
      toast.error('Select a role');
    } else {
      onCloseB();
      onOpenA();
    }
  };

  const filterItems = useMemo(async () => {
    if (hasSearchFilter) {
      const temp_data: any = await getAccountsTableData(search);
      setDatas(temp_data);
    } else {
      setDatas(tableData);
    }
  }, [hasSearchFilter, search]);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setSearch(value);
      setPage(1);
    } else {
      setSearch('');
    }
  }, []);

  const onClears = useCallback(() => {
    setSearch('');
    setPage(1);
  }, []);

  const rowsPerPage = 6;

  const pages = Math.ceil(datas.length / rowsPerPage);

  const topContent = useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <div className="flex-1 max-w-[320px]">
          <Input
            isClearable
            variant="flat"
            size="sm"
            placeholder="Search..."
            onClear={onClears}
            onValueChange={onSearchChange}
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
            classNames={{
              input:
                'focus:outline-none border-transparent focus:border-transparent focus:ring-0',
            }}
          />
        </div>
        <div className="flex-1 flex justify-end">
          {userRole === 'ADMIN' && (
            <Button
              variant="solid"
              className="bg-black text-white"
              onPress={OnClickHandlerB}
            >
              Change Role
            </Button>
          )}
        </div>
      </div>
    );
  }, [selectedKeys]);

  //rendering each cell
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'status':
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {cellValue === 'PENDING' && (
                  <CircleArrowDown color={'#FFA500'} size={20} />
                )}
                {cellValue === 'PROCESSING' && (
                  <LoaderCircle color={'#FFA500'} size={20} />
                )}
                {cellValue === 'ACCEPTED' && (
                  <CircleCheck color={'#039487'} size={20} />
                )}
                {cellValue === 'REJECTED' && (
                  <CircleX color={'#FF0000'} size={20} />
                )}
                {cellValue === 'PAID' && (
                  <CircleDollarSign color={'#039487'} size={20} />
                )}
                {cellValue === 'ASSIGNED' && (
                  <LoaderCircle color={'#039487'} size={20} />
                )}

                {/* <CircleCheck color="#00ff00" size={12} /> */}
              </TooltipTrigger>
              <TooltipContent>
                {cellValue === 'PENDING' && <p>Submitted Application</p>}
                {cellValue === 'PROCESSING' && <p>Processing</p>}
                {cellValue === 'ASSIGNED' && <p>Assigned Reviewer</p>}
                {cellValue === 'ACCEPTED' && <p>Accepted</p>}
                {cellValue === 'REJECTED' && <p>Rejected</p>}
                {cellValue === 'PAID' && <p>Paid</p>}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      case 'actions':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Link href={`/profile/${user.id}`}>
              <Button className="rounded-full" isIconOnly variant="light">
                <EllipsisVertical size={20} />
              </Button>
            </Link>
          </div>
        );
      case 'role':
        return (
          <div className="text-sm text-center">
            {user.role === 'ADMIN' && <span>Admin</span>}
            {user.role === 'EVALUATOR' && <span>Evaluator</span>}
            {user.role === 'APPLICANT' && <span>Applicant</span>}
            {user.role === 'COORDINATOR' && <span>Coordinator</span>}
          </div>
        );
      default:
        return <div className="text-sm">{cellValue}</div>;
    }
  }, []);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return datas.slice(start, end);
  }, [page, datas]);

  return (
    <div className="my-5">
      <div className="relative overflow-x-auto mb-10 mt-3">
        <div className="mt-5 text-3xs">
          {/* Table Rows */}
          {loading ? (
            <Loader />
          ) : (
            <Table
              color={'primary'}
              selectionMode="multiple"
              aria-label="Example table with client side pagination"
              topContent={topContent}
              onSelectionChange={handleSelectionChange}
              selectedKeys={selectedKeys}
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
              classNames={{
                wrapper: 'min-h-[222px]',
              }}
              //   onSelectionChange={(e) => changeSelectionKeys(e)}
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.key}>
                    <div className="max-w-[150px]">{column.label}</div>
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody
                items={items}
                emptyContent={'No rows to display.'}
                className="text-3xs"
              >
                {(item: any) => (
                  <TableRow key={item.id} className="pt-10">
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
        <div>
          <Modal
            backdrop="opaque"
            isOpen={isOpenA}
            onOpenChange={onOpenChangeA}
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                },
                exit: {
                  y: -20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: 'easeIn',
                  },
                },
              },
            }}
          >
            <ModalContent>
              {(onCloseA) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Assign Role
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Do you want to ASSIGN {Array.from(selectedKeys).length}{' '}
                      user(s) to {selectedOption} ?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onCloseA}>
                      No
                    </Button>
                    <Button color="primary" onClick={onCloseHandlerA}>
                      Yes
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <Modal
            backdrop="opaque"
            isOpen={isOpenB}
            onOpenChange={onOpenChangeB}
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                },
                exit: {
                  y: -20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: 'easeIn',
                  },
                },
              },
            }}
          >
            <ModalContent>
              {(onCloseB) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Select A Role
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Select A role for these {Array.from(selectedKeys).length}{' '}
                      user(s).
                    </p>
                    <CustomRadioGroup
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onCloseB}>
                      Close
                    </Button>
                    <Button color="primary" onClick={onCloseHandlerB}>
                      Assign
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AccountsTable;
