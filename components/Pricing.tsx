import React from "react";
import PricingItem from "./PricingItem";

const Pricing = ({ data }) => {
  return (
    <section className="bg-white" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold">
            {data.title}
          </h2>
          <p className="mb-5 font-light  sm:text-xl">{data.description}</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {data.list &&
            data.list.map((item) => (
              <PricingItem data={item} key={item._key} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
