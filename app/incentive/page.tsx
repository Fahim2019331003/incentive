import Link from 'next/link';
import Carousel from '../components/incentive/Carousel';
import ListItem from '../components/incentive/ListItem';
import { listData } from './data';
import Image from 'next/image';

const page = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="pt-5">
        <Carousel />
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-xl m-20 py-10 max-w-7xl">
          <div className="flex flex-col justify-around">
            <div className="text-3xl font-semibold text-center px-10">
              Criteria for providing financial incentives to SUST faculty
              members for the publication of articles in international journals.
            </div>
            <div className="px-15">
              <ol>
                {listData.map((item, index) => (
                  <ListItem data={item.data} index={index + 1} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 flex justify-center align-center">
        <Link href={'/apply-incentive'}>
          <div className="flex items-center px-4 py-2 font-bold shadow-md hover:bg-green-300 focus:outline-none">
            <div className="max-w-1">Apply For Incentive</div>
            <div>
              <Image src={'/or.png'} width={50} height={50} alt={'or'} />
            </div>
            <div>
              <Image src={'/right.png'} width={50} height={50} alt={'right'} />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default page;
