import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanity";

const Hero = ({ data }) => {
  return (
    <section id="hero" className="pt-20">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            {data.title}
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            {data.description}
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/contact">
              <a className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                {data.btnText}
              </a>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={urlFor(data.image) as any} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
