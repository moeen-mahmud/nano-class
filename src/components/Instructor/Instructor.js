import React from "react";

const Instructor = (props) => {
  const { instructor, instructorThumb } = props.instructor;
  return (
    <div>
      <img className="w-" src={instructorThumb} alt={instructor} />
      <h1>{instructor}</h1>
    </div>
  );
};

export default Instructor;
