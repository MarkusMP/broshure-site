import Cta from "../components/Cta";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import {
  queryCta,
  queryFeature,
  queryFooter,
  queryHeader,
  queryHero,
  queryPricing,
  queryTestimonials,
} from "../data/queries";
import { getClient } from "../lib/sanity.server";

const IndexPage = ({
  header,
  hero,
  feature,
  testimonials,
  cta,
  footer,
  pricing,
}) => {
  return (
    <Layout title="Leasyse | Landing Page" header={header} footer={footer}>
      <Hero data={hero} />
      <Features data={feature} />
      <Pricing data={pricing} />
      <Testimonials data={testimonials} />
      <Cta data={cta} />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const client = await getClient(preview);

  const header = await client.fetch(queryHeader);
  const hero = await client.fetch(queryHero);
  const feature = await client.fetch(queryFeature);
  const testimonials = await client.fetch(queryTestimonials);
  const cta = await client.fetch(queryCta);
  const footer = await client.fetch(queryFooter);
  const pricing = await client.fetch(queryPricing);

  return {
    props: {
      header,
      hero,
      feature,
      testimonials,
      cta,
      footer,
      pricing,
    },
  };
}

export default IndexPage;
