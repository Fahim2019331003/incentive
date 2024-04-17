import ApplicationTab from '../components/applications/ApplicationTab';

const page = () => {
  return (
    <main className="min-h-screen mr-8 xl:pt-14">
      <div className="">
        <div className=" min-h-screen">
          <ApplicationTab/>
        </div>
      </div>
    </main>
  );
};

export default page;



/*
import ApplicationTab from '../components/applications/ApplicationTab';

const page = () => {
  return (
    <main className="flex flex-col">
      <div className="m-16">
        <div className="mt-20 min-h-screen">
          <ApplicationTab/>
        </div>
      </div>
    </main>
  );
};

export default page;

*/