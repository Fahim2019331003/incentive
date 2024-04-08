'use client';

import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import getIncentiveTableData from '@/app/actions/getIncentiveTableData';
import { getSearchData } from '@/app/actions/getSearchData';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Loader from '../Loader';

const columns = [
  {
    key: 'applicationId',
    label: 'Application ID',
  },
  {
    key: 'totalAmount',
    label: 'Total Amount in BDT',
  },
  {
    key: 'name',
    label: 'Author Name',
  },
  {
    key: 'amount',
    label: 'Amount in BDT',
  },
  {
    key: 'type',
    label: 'Type of Payment',
  },
];

const IncentiveTable = () => {
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
        const response: any = await getIncentiveTableData();
        // console.log(response);
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

  const rowsPerPage = 4;

  const pages = Math.ceil(datas.length / rowsPerPage);

  const topContent = useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <div className="flex-1 max-w-[320px]">
          {/* <Input
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
          /> */}
        </div>
        <div className="flex-1 flex justify-end"></div>
      </div>
    );
  }, []);

  //rendering each cell
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'name':
        return (
          <div>
            {user.datas.map((item,index) => {
              return <div className="m-2" key={index} >{item.name}</div>;
            })}
          </div>
        );
      case 'amount':
        return (
          <div>
            {user.datas.map((item,index) => {
              return <div className="m-2" key={index}>{item.amount}</div>;
            })}
          </div>
        );
      case 'type':
        return (
          <div>
            {user.datas.map((item,index) => {
              if (item.type === 'COMMON') {
                return <div className="m-2" key={index}>Benefit as Common Author</div>;
              }
              if (item.type === 'BOTH') {
                return (
                  <div className="m-2" key={index}>
                    Benefit as First and Corresponding Author
                  </div>
                );
              }
              if (item.type === 'FIRSTAUTHOR') {
                return <div className="m-2" key={index}>Benefit as First Author</div>;
              }
              if (item.type === 'CORRESPONDING') {
                return (
                  <div className="m-2" key={index}>Benefit as Corresponding Author</div>
                );
              }
            })}
          </div>
        );
      case 'totalAmount': {
        let total = 0.0;
        user.datas.map((item) => {
          total += parseFloat(item.amount);
        });
        const totalString = total.toString();

        return <div>{totalString}</div>;
      }
      default:
        return (
          <div className="max-w-[140px] text-sm text-center">{cellValue}</div>
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
                  <TableRow key={item.applicationId} className="pt-10">
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

export default IncentiveTable;
