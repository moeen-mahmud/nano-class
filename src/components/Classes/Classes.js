import React from "react";
import useClasses from "../hooks/useClasses";
import SingleClass from "../SingleClass/SingleClass";

const Classes = () => {
  const [classes] = useClasses([]);

  return (
    <div className="text-center px-16 py-16">
      <h1 className="text-center text-5xl font-bold mb-20">Our Classes</h1>
      <div className="grid grid-cols-3 place-items-center gap-10">
        {classes.map((clas) => (
          <SingleClass clas={clas} key={clas.id}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
