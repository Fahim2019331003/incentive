const ProfileItem = ({ title, info }) => {
  return (
    <div className="flex mb-1">
      <div className="font-semibold w-32">{title}</div>
      <div className="">{info}</div>
    </div>
  );
};

export default ProfileItem;
