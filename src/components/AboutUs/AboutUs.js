import React from "react";

const AboutUs = () => {
  return (
    <div className=" px-12 py-8">
      <div className="flex justify-around items-center">
        <div className="w-1/2">
          <img src="./images/about_us.jpg" alt="About Us" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-12">Who we are</h1>
          <p className="leading-snug text-xl font-semibold">
            We are on the threshold of transitioning to the next generation of
            the internet, Web 3.0, which will be a more transparent and largely
            decentralized version of the web. To survive and prosper in this new
            decentralized environment, you’ll need to master new skills, such as
            building decentralized applications (dApps). Mastering Web 3.0 with
            Waves is a very practical course. Upon completing it, you’ll be able
            to build your very first decentralized application (dApp) using the
            Ride programming language and the Waves blockchain.
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center my-32">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-3">Got a question?</h1>
          <p className="font-semibold text-lg mb-12">
            Feel free to contact with us
          </p>
          <textarea
            className="border-2 rounded border-indigo-600 block p-3"
            name="message"
            cols="70"
            rows="5"
            placeholder="How can I be benefited by your classes?"
          ></textarea>
          <button className="mt-6 mb-2 bg-indigo-600 text-white rounded px-12 py-2 text-xl">
            Send
          </button>
        </div>
        <div className="w-1/2">
          <img src="./images/contact_us.jpg" alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
