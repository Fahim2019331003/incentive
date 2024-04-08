'use client';

import {
  Button,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { getSearchData } from '@/app/actions/getSearchData';
import getTablePaidData from '@/app/actions/getTablePaidData';

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
import Loader from '../Loader';
import { SearchIcon } from './SearchIcon';

const columns = [
  {
    key: 'id',
    label: 'Application ID',
  },
  {
    key: 'name',
    label: 'Applicant Name',
  },
  {
    key: 'title',
    label: 'Title',
  },
  {
    key: 'department',
    label: 'Department',
  },
  {
    key: 'affiliatedPersons',
    label: 'Name of SUST Author(s)',
  },
  {
    key: 'volAndDate',
    label: 'Vol & Date',
  },
  {
    key: 'qIndex',
    label: 'Status in Q',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const TablePaid = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [selectedKeysValues, setSelectedKeysValues] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [datas, setDatas] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(1);
  const hasSearchFilter = Boolean(search);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await getTablePaidData();

        setDatas(response);
        setTableData(response);
        setLoading(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(selectedKeysValues);
  }, [selectedKeysValues]);

  const handleSelectionChange = (newSelectedKeys) => {
    setSelectedKeys(newSelectedKeys);
    setSelectedKeysValues(Array.from(newSelectedKeys));
    // setSelectedKeysValues(Array.from(newSelectedKeys));
  };

  const changeSelectionKeys = (e) => {
    setSelectedKeys(e);
  };

  const filterItems = useMemo(async () => {
    if (hasSearchFilter) {
      const tableType = 'paid';
      const temp_data: any = await getSearchData(search, tableType);
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
        <div className="flex-1 flex justify-end"></div>
      </div>
    );
  }, [selectedKeys]);

  //rendering each cell
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'affiliatedPersons':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60px] max-w-[150px] text-sm">
            {user.affiliatedPersons.map((person) => {
              return (
                <div key={person} className="text-center">
                  {person}
                </div>
              );
            })}
          </div>
        );
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
            <Link href={`/applications/${user.id}`}>
              <Button className="rounded-full" isIconOnly variant="light">
                <EllipsisVertical size={20} />
              </Button>
            </Link>
          </div>
        );
      default:
        return (
          <div className="max-w-[150px] text-sm text-center">{cellValue}</div>
        );
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
              selectionMode="single"
              aria-label="Example table with client side pagination"
              topContent={topContent}
              onSelectionChange={handleSelectionChange}
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
      </div>
    </div>
  );
};

export default TablePaid;
