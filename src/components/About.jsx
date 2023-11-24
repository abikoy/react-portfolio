import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
       My name is Haile Kinfu from Dire Dawa University.
    I am HTML,CSS, JAVASCRIPT,REACT JS  developer.
        </p>

        <br />

        <p className="text-xl">
I can develop responsive website with material ui.
  


        </p>
      </div>
    </div>
  );
};

export default About;
