// Importing necessary file
import React from "react";

// Importing custom useClass hook
import useClasses from "../hooks/useClasses";

// Importing instructor component
import Instructor from "../Instructor/Instructor";

// Using useHistory hook from react router dom
import { useHistory } from "react-router-dom";

// Instructors component
const Instructors = () => {
  //Using custom hook
  const [classes] = useClasses([]);

  //Using history to go to about us page
  const history = useHistory();

  //Click handler
  const handleGetStarted = () => {
    history.push("./about-us");
  };

  return (
    <div className="px-16">
      {/* Hero area */}
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

      {/* Showing all instructors */}
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
          <button
            onClick={handleGetStarted}
            className="mt-6 mb-2 bg-indigo-600 text-white rounded px-12 py-2 text-xl"
          >
            Get Started
          </button>
        </div>

        {/* Teaching section */}
        <div className="w-1/2">
          <img src="./images/teach-us.jpg" alt="Teach with us" />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
