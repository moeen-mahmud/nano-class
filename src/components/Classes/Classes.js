// Importing necessary file
import React from "react";

// Importing custom hook
import useClasses from "../hooks/useClasses";

// Importing single class component
import SingleClass from "../SingleClass/SingleClass";

// Classes component
const Classes = () => {
  //Using useClasses hook
  const [classes] = useClasses([]);

  return (
    <div className="text-center px-16 py-16">
      <h1 className="text-center text-5xl font-bold mb-20">Our Classes</h1>

      {/* Showing all class services */}
      <div className="grid grid-cols-3 place-items-center gap-10">
        {classes.map((clas) => (
          <SingleClass clas={clas} key={clas.id}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
