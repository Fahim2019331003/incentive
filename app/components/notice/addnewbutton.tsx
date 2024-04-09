import Image from 'next/image';
import Link from 'next/link';

const AddNewButton = () => {
  return (
    <div className="flex justify-end max-w-7xl mx-auto">
      <div className="flex text-3xl font-semibold max-w-7xl mr-2">
        <Link href={'/new-notice'}>
          <div className="flex items-center pl-3 text-sm justify-center shadow-xl bg-black hover:bg-gray-800 text-white rounded-md">
            Add new notice
            <div className="flex items-center justify-center p-2">
              <Image src={'/add.png'} width={15} height={15} alt={'right'} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddNewButton;
