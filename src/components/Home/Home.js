import React from "react";

const Home = () => {
  return (
    <div className="flex justify-around items-center my-8">
      <div className="ml-12 leading-loose">
        <h2 className="text-6xl leading-snug font-bold">
          Be prepared
          <br />
          for the <span className="text-indigo-600">next</span> <br />
          generation of web.
        </h2>
        <p className="text-xl leading-normal mt-5">
          Don't waste time on long classes, be more
          <br />
          productive and focus with us!
        </p>
      </div>
      <div className="m-0 w-1/2">
        <img
          src="./images/waves-img.jpg"
          alt="Hero Waves"
          className="w-2/4 block mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
