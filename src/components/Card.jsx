import React from "react";

const Card = ({ children }) => {
  return (
    <section className="sm:w-full w-[90%] bg-white rounded-2xl mt-4 mb-8 sm:px-7 px-3.5 sm:pt-10 pt-9 pb-5 shadow-md border border-gray-200">
      {children}
    </section>
  );
};

export default Card;
