import React from "react";

const SingleClass = (props) => {
  const { thumb, title, instructor, price, level } = props.clas;
  return (
    <div className="shadow-lg rounded p-8 w-96 border-2 border-indigo-600">
      <img className="w-72 block mx-auto" src={thumb} alt={title} />
      <h1 className="text-2xl font-semibold text-indigo-600 my-4 h-16">
        {title}
      </h1>
      <p className="font-semibold text-lg mb-3">By: {instructor}</p>
      <div className="flex justify-between items-center mt-4 border-t-2 border-indigo-600 pt-6">
        <p className="text-xl">
          <span className="font-bold">Price:</span> ${price}
        </p>
        <small className="text-xl">
          <span className="font-bold">Level:</span> {level}
        </small>
      </div>
    </div>
  );
};

export default SingleClass;
