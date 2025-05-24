import React from "react";

const Card = ({ children }) => {
  return (
    <section className="w-full bg-white rounded-2xl mt-4 mb-8 px-7 pt-10 pb-5 shadow-md border border-gray-200">
      {children}
    </section>
  );
};

export default Card;
