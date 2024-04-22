"use client";

import { useEffect, useState } from 'react';
import NoticeItem from './noticeItem';
import getNoticeData from '@/app/actions/getNoticeData';
import { divider } from '@nextui-org/react';
import Loader from '../Loader';

const Notices = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [loading, setLoading] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await getNoticeData();

        setNoticeData(response);
        setLoading(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='min-w-[550px]'>
      {loading ? <Loader/>:
        (
            <ol>
                {noticeData.map((item:any, index) => (
                <NoticeItem
                data={item.data}
                key={index}
                day={item.day}
                month={item.month}
                year={item.year}
                />
            ))}
            {noticeData.length==0 && (
                <div className='text-center'>No notices to show.</div>
            )}
            </ol>


        )
      }
      
    </div>
  );
};

export default Notices;
