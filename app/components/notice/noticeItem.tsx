const NoticeItem = ({ data, key, day, month, year }) => {
  return (
    <div className="py-3 px-28 mt-3" key={key}>
      <div className="flex mx-10 rounded-xl shadow-lg p-3">
        <div className="flex-col justify-center py-2 w-32">
          <div className="flex items-center justify-center border border-gray-400 rounded-t-lg text-lg">
            {day} {month}
          </div>
          <div>
            <div className="bg-black text-white text-center rounded-b-lg border border-black shadow-2xl text-lg">
              {year}
            </div>
          </div>
        </div>
        <div className="ml-3 w-full text-lg">{data}</div>
      </div>
    </div>
  );
};

export default NoticeItem;
