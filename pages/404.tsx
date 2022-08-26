import React from "react";
import Layout from "../components/Layout";
import { queryFooter, queryHeader, queryNotFound } from "../data/queries";
import { getClient } from "../lib/sanity.server";

const contact = ({ footer, header, notFound }) => {
  return (
    <Layout title="Leasyse | 404 Page" header={header} footer={footer}>
      <section className="container mx-auto flex justify-center items-center flex-col">
        <h1 className="mb-4 pt-4 text-5xl tracking-tight text-center font-bold">
          404
        </h1>
        <p className="text-lg text-center pb-4">{notFound.description}</p>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const client = await getClient(preview);

  const header = await client.fetch(queryHeader);
  const footer = await client.fetch(queryFooter);
  const notFound = await client.fetch(queryNotFound);

  return {
    props: {
      header,
      footer,
      notFound,
    },
  };
}

export default contact;
