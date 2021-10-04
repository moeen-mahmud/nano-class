import React from "react";
import useClasses from "../hooks/useClasses";
import Instructor from "../Instructor/Instructor";

const Instructors = () => {
  const [classes] = useClasses([]);

  return (
    <div className="px-16">
      <div className="flex justify-around items-center mb-16">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold mb-12">Meet our instructors</h1>
          <p className="text-xl leading-snug">
            The most experienced instructors from top companies and communities.
            <br />
            Explore the whole new era of <span>Web Technology</span> with them.
            <br />
            Take the available classes or know any query. Give it a go 🚀{" "}
          </p>
        </div>
        <div className="w-1/2">
          <img src="./images/instructors_hero.jpg" alt="Hero Instructor" />
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-10 text-center">
        {classes.map((instructor) => (
          <Instructor instructor={instructor} key={instructor.id}></Instructor>
        ))}
      </div>
      <div className="flex justify-around items-center mb-16 mt-16">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-8">Come teach with us</h1>
          <p className="text-xl leading-snug">
            Become an instructor and change lives
            <br />— including your own
          </p>
        </div>
        <div className="w-1/2">
          <img src="./images/teach-us.jpg" alt="Teach with us" />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
