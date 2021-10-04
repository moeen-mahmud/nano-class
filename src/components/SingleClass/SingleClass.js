import React from "react";

const SingleClass = (props) => {
  const { thumb, title, instructor, price, leve } = props.clas;
  return (
    <div>
      <img src={thumb} alt={title} />
      <h1>Class is here</h1>
    </div>
  );
};

export default SingleClass;
