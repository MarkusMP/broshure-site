import React from "react";
import FeaturesItem from "./FeaturesItem";

const Features = ({ data }) => {
  return (
    <section id="about" className="py-6 ">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md  text-4xl font-bold text-center md:text-left">
            {data.title}
          </h2>
          <p className="max-w-sm text-center mx-auto md:m-0 text-darkGrayishBlue md:text-left">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {data.list &&
            data.list.map((item, index) => (
              <FeaturesItem data={item} index={index + 1} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
