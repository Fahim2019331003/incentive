import React from 'react';

const FormTitle = (props) => {
  return (
    <div className="flex justify-center">
      <div className="p-5 shadow-lg rounded-3xl text-4xl font-medium px-10">
        {props.title}
      </div>
    </div>
  );
};

export default FormTitle;
