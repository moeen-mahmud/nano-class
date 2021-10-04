import React from "react";
import { useHistory } from "react-router";
import useClasses from "../hooks/useClasses";
import SingleClass from "../SingleClass/SingleClass";

const Home = () => {
  const [classes] = useClasses([]);

  const history = useHistory();

  const exploreButton = () => {
    history.push("/classes");
  };

  return (
    <>
      <div className="flex justify-around items-center mt-16">
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
      <div className="mt-16 pt-32 pb-18">
        <div className="text-center mb-24">
          <h2 className="text-5xl leading-snug font-bold">
            What are you waiting for!
          </h2>
          <p className="text-xl leading-normal mt-5">Join us today</p>
        </div>
        <div className="flex justify-around">
          <div className="w-1/2">
            <img
              className="block mx-auto rounded"
              src="./images/login-img.jpg"
              alt="Join us"
            />
          </div>
          <div>
            <div className="my-6">
              <label
                htmlFor="email"
                className="block text-2xl font-semibold mb-3"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border-2 rounded border-indigo-600 w-96 p-2"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-2xl font-semibold mb-3"
              >
                Password
              </label>
              <input
                type="password"
                name="email"
                className="border-2 rounded border-indigo-600 w-96 p-2"
              />
            </div>
            <button className="mt-6 mb-2 bg-indigo-600 text-white rounded px-12 py-2 text-xl">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="py-32 text-center">
        <h1 className="text-center text-5xl font-bold mb-16">
          Explore Classes
        </h1>
        <div className="grid grid-cols-2 place-items-center w-3/5 mx-auto gap-8">
          {classes
            .map((clas) => (
              <SingleClass clas={clas} key={clas.id}></SingleClass>
            ))
            .slice(0, 4)}
        </div>
        <button
          onClick={exploreButton}
          className="mt-12 mb-2 bg-indigo-600 text-white rounded px-12 py-2 text-xl"
        >
          Explore More
        </button>
      </div>
    </>
  );
};

export default Home;
