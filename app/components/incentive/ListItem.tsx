const ListItem = ({ data, index, key }) => {
  return (
    <li className="p-3 mt-3 " key={key}>
      <div className="flex mx-10 bg-white rounded-xl shadow-lg p-3">
        <div>{index}.</div>
        <div className="ml-3">{data}</div>
      </div>
    </li>
  );
};

export default ListItem;
