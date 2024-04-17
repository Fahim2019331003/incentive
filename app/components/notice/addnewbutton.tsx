import Image from 'next/image';
import Link from 'next/link';

const AddNewButton = () => {
  return (
    <div className="flex justify-end mx-auto pr-36">
      <div className="flex text-4xl font-semibold mr-2">
        <Link href={'/new-notice'}>
          <div className="flex items-center pl-3 text-sm justify-center bg-black hover:bg-gray-800 text-white rounded-md">
            Add new notice
            <div className="flex items-center justify-center p-2">
              <Image src={'/add.png'} width={18} height={18} alt={'right'} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddNewButton;
