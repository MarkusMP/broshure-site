import React from "react";
import TestimonialsItem from "./TestimonialsItem";

const Testimonials = ({ data }) => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center my-16">
        <h2 className="text-4xl font-bold text-center">{data.title}</h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {data.list &&
            data.list.map((item) => (
              <TestimonialsItem data={item} key={item._key} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
