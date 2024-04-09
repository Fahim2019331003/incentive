import AddNewButton from '../components/notice/addnewbutton';
import NoticeItem from '../components/notice/noticeItem';
import { noticeData } from './data';


const page = () => {
  return (
    <main className="min-h-screen px-5 xl:px-10 xl:pt-10">
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="flex justify-center pt-8 pb-4 text-3xl font-semibold max-w-7xl">
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
