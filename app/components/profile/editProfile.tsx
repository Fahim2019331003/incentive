import Link from 'next/link';
import Image from 'next/image';

const EditProfile = () => {
  return (
    <Link href={'/edit-profile'}>
      <div className="flex items-center justify-center pb-48 pr-2">
        <Image src={'/editProfile.png'} width={35} height={35} alt={'right'} />
      </div>
    </Link>
  );
};

export default EditProfile;
