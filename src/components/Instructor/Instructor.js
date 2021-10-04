import React from "react";

const Instructor = (props) => {
  const { instructor, instructorThumb, instructorAbout } = props.instructor;

  return (
    <div className="shadow-lg rounded p-8 w-96 border-2 border-indigo-600">
      <img
        className="w-60 h-60 block mx-auto"
        src={instructorThumb}
        alt={instructor}
      />
      <h1 className="text-2xl font-semibold text-indigo-600 my-4">
        {instructor}
      </h1>
      <button className="mt-6 mb-2 bg-indigo-600 text-white rounded px-12 py-2 text-xl">
        Details
      </button>
    </div>
  );
};

export default Instructor;
