import React from "react";
import Layout from "../components/Layout";
import { queryFooter, queryHeader, queryPolicy } from "../data/queries";
import { getClient } from "../lib/sanity.server";
import PortableText from "react-portable-text";

const components = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const contact = ({ footer, header, policy }) => {
  return (
    <Layout title="Manage | Landing Page" header={header} footer={footer}>
      <section className="container mx-auto max-w-2xl py-20">
        <h1 className="mb-4 text-4xl tracking-tight text-center font-bold">
          Privacy & Policy
        </h1>
        <p className="mb-4 text-center">Last updated on August 26, 2022</p>
        {policy.policy && <PortableText content={policy.policy} />}
      </section>
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const client = await getClient(preview);

  const header = await client.fetch(queryHeader);
  const footer = await client.fetch(queryFooter);
  const policy = await client.fetch(queryPolicy);

  return {
    props: {
      header,
      footer,
      policy,
    },
  };
}

export default contact;
