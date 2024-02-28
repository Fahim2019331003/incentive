import Image from 'next/image';

const User = ({ name, role }) => {

  

  return (
    <div className="flex items-center">
      <Image
        src="/images/user.png"
        alt="user"
        width={50}
        height={50}
        className="border bg-white"
      />
      <div className="flex flex-col ">
        <div className="mx-3 mb-2">
          Signed In As <span className="font-bold">{name}</span>
        </div>
        <div className="mx-3 text-sm">{role}</div>
      </div>
    </div>
  );
};

export default User;
