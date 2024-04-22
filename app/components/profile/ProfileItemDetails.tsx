const ProfileItemDetails = ({ title, info }) => {
  return (
    <div className="flex mb-1">
      <div className="font-semibold w-32 ">{title}</div>
      <div className="border border-gray-100 w-unit-9xl rounded-md p-1">
        {info}
      </div>
    </div>
  );
};

export default ProfileItemDetails;
