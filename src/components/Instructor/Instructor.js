// Importing necessary file
import React from "react";

// Importing relevant files from reach ui accordion library
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";

// Instructor component
const Instructor = (props) => {
  //Get data from props
  const { instructor, instructorThumb, instructorAbout } = props.instructor;

  return (
    //Single instructor cart
    <div className="shadow-lg rounded p-8 w-96 border-2 border-indigo-600">
      <img
        className="w-60 h-60 block mx-auto"
        src={instructorThumb}
        alt={instructor}
      />
      <h1 className="text-2xl font-semibold text-indigo-600 my-4">
        {instructor}
      </h1>
      <div className="accordion relative">
        {/* Accordion */}
        <Accordion collapsible>
          <AccordionItem>
            <AccordionButton className="mt-6 mb-2 bg-indigo-600 text-white rounded px-12 py-2 text-xl active:bg-indigo-800">
              Details
            </AccordionButton>

            <AccordionPanel>
              <p className="absolute bg-white text-gray-800 text-justify p-3 border-2 border-indigo-600 rounded text-lg z-10">
                {instructorAbout}
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Instructor;
