"use client"
import getTableData from '../actions/getTableData';

const page = async () => {
  // const data = await getTableData();
  // console.log(data);

  const onClick=async()=>{
    const data = await getTableData();
    console.log(data);
  }
  return (
    <main className="flex flex-col">
      <div className="m-16">
        <div className="mt-20 min-h-screen">
          <button onClick={onClick}>Click me pleaseeeee</button>
        </div>
      </div>
    </main>
  );
};

export default page;
