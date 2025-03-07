import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../components/home/Carousel';
import ListItem from '../components/incentive/ListItem';
import { listData } from './data';
import { Card, CardBody } from '@nextui-org/react';

const page = () => {
  return (
    <main className="flex flex-col">
      <div className="m-16">
        <Carousel />

        <Card className='mt-20'>
        <CardBody>
        <div className="flex justify-center">
          <div className="m-5 py-10">
            <div className="flex flex-col justify-around">
              <div className="text-3xl font-semibold text-center px-10">
              {'শাবিপ্রবি\'র শিক্ষকবৃন্দের আন্তর্জাতিক জার্নালে প্রবন্ধ প্রকাশের জন্য আর্থিক প্রণোদনা প্রাপ্তির শর্তাবলী'}
              </div>
              <div className="px-15 mt-5">
                <ol>
                  {listData.map((item, index) => (
                    <ListItem data={item.data} index={index + 1} key={index} />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16 flex justify-center align-center">
          <Link href={'/apply-incentive'}>
            <div className="flex items-center px-4 py-2 border border-gray-500 font-bold shadow-md hover:bg-green-300 focus:outline-none">
              <div className="max-w-1">Apply For Incentive</div>
              <div>
                <Image src={'/or.png'} width={50} height={50} alt={'or'} />
              </div>
              <div>
                <Image
                  src={'/right.png'}
                  width={50}
                  height={50}
                  alt={'right'}
                />
              </div>
            </div>
          </Link>
        </div>
        </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default page;


/*
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../components/home/Carousel';
import ListItem from '../components/incentive/ListItem';
import { listData } from './data';

export default async function Home() {
  return (
    <main className="min-h-screen mr-8 xl:pt-14">
      <Carousel />

      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-xl mt-16 py-10">
          <div className="flex flex-col justify-around">
            <div className="text-4xl font-semibold text-center px-28 w-7xl">
            {'শাবিপ্রবি\'র শিক্ষকবৃন্দের আন্তর্জাতিক জার্নালে প্রবন্ধ প্রকাশের জন্য আর্থিক প্রণোদনা প্রাপ্তির শর্তাবলী'}
            </div>
            <div className="px-15 mt-4">
              <ol>
                {listData.map((item, index) => (
                  <ListItem data={item.data} index={index + 1} key={index} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-20 flex justify-center align-center pt-8 ">
        <Link href={'/apply-incentive'}>
          <div className="flex items-center px-4 py-2 border border-gray-500 font-bold shadow-md hover:bg-green-300 focus:outline-none">
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
}
*/