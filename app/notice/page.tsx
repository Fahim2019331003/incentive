import AddNewButton from '../components/notice/addnewbutton';
import NoticeItem from '../components/notice/noticeItem';
import { noticeData } from './data';


const page = () => {
  return (
    <main className="min-h-screen xl:px-10 xl:pt-10">
      <div className="flex justify-center max-w-full mx-auto">
        <div className="flex justify-center pt-4 pb-4 text-3xl font-semibold max-w-7xl">
          <h1>Notice Archive</h1>
        </div>
      </div>

      <AddNewButton />

      <div className="flex justify-center mt-4 mb-16">
        <div className="bg-gray-100 rounded-xl py-10 max-w-7xl">
          <div className="flex flex-col justify-around">
            <div className="px-15">
              <ol>
                {noticeData.map((item, index) => (
                  <NoticeItem
                    data={item.data}
                    key={index}
                    day={item.day}
                    month={item.month}
                    year={item.year}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;





/*
import Carousel from '../components/home/Carousel';
import AddNewButton from '../components/notice/addnewbutton';
import NoticeItem from '../components/notice/noticeItem';
import { noticeData } from './data';

export default async function Home() {
  return (
    <main className="min-h-screen mr-8 xl:pt-14">
      <Carousel />

      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-xl mt-16 py-10">
          <div className="flex flex-col justify-around">
            <div className="text-4xl font-semibold text-center px-28 w-7xl">
              Notice Archive
            </div>

            <div>
              <AddNewButton />
            </div>

            <div className="flex justify-center pt-2">
              <div className="bg-gray-100 rounded-xl">
                <div className="flex flex-col justify-around">
                  <div className="px-15">
                    <ol>
                      {noticeData.map((item, index) => (
                        <NoticeItem
                          data={item.data}
                          key={index}
                          day={item.day}
                          month={item.month}
                          year={item.year}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
*/
