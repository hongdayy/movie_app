import React from "react";

const Body = ({ reverse, title, text, img }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full bg-black border-b-8 border-neutral-800 p-6 md:p-12">
      {!reverse ? (
        <>
          <div className="flex flex-col text-white max-w-lg">
            <h2 className="text-4xl font-bold pb-4">{title}</h2>
            <p className="text-2xl pb-4">{text}</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={img} alt="tv" className="w-full max-w-md" />
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={img} alt="tv" className="w-full max-w-md" />
          </div>
          <div className="flex flex-col text-white max-w-lg text-center md:text-left">
            <h2 className="text-4xl font-bold pb-4">{title}</h2>
            <p className="text-2xl pb-4">{text}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
