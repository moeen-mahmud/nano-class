// Importing necessary hooks
import { useEffect, useState } from "react";

// Custom hook
const useClasses = () => {
  const [classes, setClasses] = useState([]);

  //Fetching data from classData
  useEffect(() => {
    fetch("./classData.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return [classes];
};

export default useClasses;
