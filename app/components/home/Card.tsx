const card = ({title,description}) => {
  return (
    <div className="mx-40 my-10">
      {/* <div className="text-5xl text-red-700 gap-0">______</div> */}
      <hr
        style={{
          background: '#FF4B4B',
          color: '#FF4B4B',
          height: '7px',
          width: '100px',
        }}
      />
      {/* <hr className="bg-red-600 color-red-600 h-2 w-20" /> */}
      <div className="text-5xl mt-3 font-medium">{title}</div>
      <div className="text-md text-justify mt-5 bg-gray-100 p-5 rounded-xl shadow-md">
        {description}
      </div>
    </div>
  );
};

export default card;
