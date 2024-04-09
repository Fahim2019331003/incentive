const ProfileItemArr = ({ title, info }) => {
  return (
    <div className="flex items-center mb-3 ">
      <div className="font-semibold text-base w-full md:w-1/4 lg:w-2/5">{title}</div>
      <div className="text-base w-full md:w-3/4 lg:w-3/5">
        <div className="">
          {info.map((author, index) => (
            <div className="text-base mb-1 flex w-9xl" key={index}>
              <h1 className="font-semibold mr-2">{index + 1}.</h1>
              <div>{author}</div>
            </div>
          ))}
        </div>{' '}
      </div>
    </div>
  );
};

export default ProfileItemArr;

{
  /* */
}
