'use client';

import { getSearchData } from '@/app/dashboard/getData';
import {
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SearchIcon } from './SearchIcon';
import Tabletitle from './Tabletitle';

const columns = [
  {
    key: 'sl',
    label: 'SL',
  },
  {
    key: 'appID',
    label: 'Application ID',
  },
  {
    key: 'name',
    label: 'Name of SUST Author(s)',
  },
  {
    key: 'dept',
    label: 'Department',
  },

  {
    key: 'vol',
    label: 'VOL & Date',
  },
  {
    key: 'remark',
    label: 'Remark',
  },
];

const CustomTable = ({ title, tableData }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [datas, setDatas] = useState(tableData);
  const hasSearchFilter = Boolean(search);

  useEffect(() => {
    const values = Array.from(selectedKeys);

    console.log(values);
  }, [selectedKeys]);

  const changeSelectionKeys = (e) => {
    setSelectedKeys(e);
  };

  const filterItems = useMemo(async () => {
    if (hasSearchFilter) {
      const temp_data = await getSearchData(search);
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

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return datas.slice(start, end);
  }, [page, datas]);

  return (
    <div>
      <div className="my-10">
        <Tabletitle title={title} />
      </div>

      <div className="mx-10">
        <div className="relative overflow-x-auto mb-10 mt-3 mx-20">
          <div className="mt-5 text-xl">
            {/* Table Rows */}
            <Table
              color={'primary'}
              selectionMode="multiple"
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
                className="text-xl"
              >
                {(item: any) => (
                  <TableRow key={item.appID} className="pt-10">
                    {(columnKey) => (
                      <TableCell>
                        <Link href={'/'}>{getKeyValue(item, columnKey)}</Link>
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
