import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ data }) => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <h1 className="h-8 text-white text-4xl">{data.logo}</h1>
          </div>

          <div className="flex justify-center space-x-4">
            {data.facebook && (
              <a href={data.facebook}>
                <FaFacebook className="h-8 text-white" />
              </a>
            )}

            {data.twitter && (
              <a href={data.twitter}>
                <FaTwitter className="h-8 text-white" />
              </a>
            )}

            {data.instagram && (
              <a href={data.instagram}>
                <FaInstagram className="h-8 text-white" />
              </a>
            )}
          </div>
        </div>

        <div className="flex justify-around space-x-20">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="/">
              <a className="hover:text-brightRed">{data.home && data.home}</a>
            </Link>
            <Link href="#pricing">
              <a className="hover:text-brightRed">
                {data.pricing && data.pricing}
              </a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-brightRed">
                {data.contact && data.contact}
              </a>
            </Link>
            <Link href="/#about">
              <a className="hover:text-brightRed">{data.about && data.about}</a>
            </Link>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <Link href="#testimonials">
              <a className="hover:text-brightRed">
                {data.testimonials && data.testimonials}
              </a>
            </Link>

            <Link href="/policy">
              <a className="hover:text-brightRed">
                {data.policy && data.policy}
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex justify-center flex-col md:flex-row">
              <input
                type="text"
                className="px-4 py-2 md:py-0 mb-4 md:mb-0 rounded focus:outline-none"
                placeholder="Join our newsletter"
              />
              <button className="px-6 py-2 text-white rounded md:ml-2  bg-brightRed hover:bg-brightRedLight focus:outline-none">
                {data.btnText}
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
