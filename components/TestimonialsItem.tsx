import React from "react";
import { urlFor } from "../lib/sanity";

const TestimonialsItem = ({ data }) => {
  return (
    <div className="flex flex-col mt-12 md:mt-0  items-center p-6 space-y-4 rounded-lg bg-veryLightGray md:w-1/3">
      <img
        src={urlFor(data.image) as any}
        className="w-16 -mt-14"
        alt={data.imageAlt}
      />
      <h5 className="text-lg font-bold">{data.title}</h5>
      <p className="text-sm text-darkGrayishBlue">{data.description}</p>
    </div>
  );
};

export default TestimonialsItem;
