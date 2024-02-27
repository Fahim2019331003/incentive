'use client';

import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import Tableitem from './Tableitem';
import Tabletitle from './Tabletitle';
import Tabletest from "./Tabletest";



const table = ({ title, tableData }) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(tableData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-generator.retool.com/ejMJvt/data/${search}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const searchData = await response.json();
        if (!Array.isArray(searchData)) {
          setData([searchData]);
        } else {
          setData(searchData);
        }
        console.log(searchData);
      } catch (error) {
        console.error('Error fetching data:', error);

        setData([]);
      }
    };

    if (search.trim() !== '') {
      fetchData();
    } else {
      setData(tableData);
    }
  }, [search]);

  return (
    <div>
      <div className="my-10">
        <Tabletitle title={title} />
      </div>

      <div className="mx-10">
        {/* SearchBox */}
        <div className="flex flex-row-reverse">
          <div>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon />
              </span>
              <input
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search"
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>
        </div>
        {/* Table Rows */}
        
        <Tabletest />
      </div>
    </div>
  );
};

export default table;
