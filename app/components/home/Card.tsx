const Card = ({ title, description }) => {
  return (
    <div className="my-10" key={title}>
      <hr
        style={{
          background: '#FF4B4B',
          color: '#FF4B4B',
          height: '7px',
          width: '100px',
        }}
      />
      <div className="text-5xl mt-3 font-medium">{title}</div>
      <div className="text-md text-justify mt-5 bg-gray-100 p-5 rounded-xl shadow-md ">
        {description}
      </div>
    </div>
  );
};

export default Card;
