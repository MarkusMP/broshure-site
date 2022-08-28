import React from "react";
import Layout from "../components/Layout";
import { queryContact, queryFooter, queryHeader } from "../data/queries";
import { getClient } from "../lib/sanity.server";

const contact = ({ footer, header, contact }) => {
  return (
    <Layout title="Leasyse | Contact Page" header={header} footer={footer}>
      <section className="container mx-auto">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-center">
            {contact.title}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            {contact.description}
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300   "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-white text-center bg-brightRed hover:bg-brightRedLight rounded-lg sm:w-fit focus:ring-4 focus:outline-none  "
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const client = await getClient(preview);

  const header = await client.fetch(queryHeader);
  const footer = await client.fetch(queryFooter);
  const contact = await client.fetch(queryContact);

  return {
    props: {
      header,
      footer,
      contact,
    },
  };
}

export default contact;
