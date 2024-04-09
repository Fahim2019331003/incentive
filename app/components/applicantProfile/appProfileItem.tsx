const AppProfileItem = ({ title, info }) => {
  return (
    <div className="flex items-center mb-4 ">
      <div className="font-semibold text-base w-full md:w-1/4 lg:w-2/5">{title}</div>
      <div className="text-base w-full md:w-3/4 lg:w-3/5">{info}</div>
    </div>
  );
};

export default AppProfileItem;
