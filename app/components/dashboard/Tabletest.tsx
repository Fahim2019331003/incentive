'use client';

import { getSearchData } from '@/app/actions/getSearchData';
import getTableData from '@/app/actions/getTableData';
import {
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Link from 'next/link';
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
    key: 'journalName',
    label: 'Journal Name',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const CustomTable = ({ title }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [datas, setDatas] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(1);
  const hasSearchFilter = Boolean(search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await getTableData();
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
    const values = Array.from(selectedKeys);

    console.log(values);
  }, [selectedKeys]);

  const changeSelectionKeys = (e) => {
    setSelectedKeys(e);
  };

  const filterItems = useMemo(async () => {
    if (hasSearchFilter) {
      const tableType = 'all';
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
      <div className="flex flex-row-reverse gap-2 max-w-[320px]">
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
    );
  }, []);

  //rendering each cell
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'affiliatedPersons':
        return (
          <div className="flex flex-col items-center justify-center min-h-[40px]">
            {user.affiliatedPersons.map((person) => {
              return <div key={person}>{person}</div>;
            })}
          </div>
        );
      case 'actions':
        return (
          <div className="text-destructive">
            <Link href={`/applications/${user.id}`}>Details</Link>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return datas.slice(start, end);
  }, [page, datas]);

  return (
    <div>
      <div className="text-4xl font-semibold text-center px-28 w-7xl">
        {title}
      </div>

      <div>
        <div className="relative overflow-x-auto mb-10 mt-3 ">
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
                onSelectionChange={(e) => changeSelectionKeys(e)}
              >
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
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
    </div>
  );
};

export default CustomTable;
