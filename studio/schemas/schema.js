// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import header from "./header";
import hero from "./hero";
import feature from "./feature";
import item from "./item";
import testimonials from "./testimonials";
import testimonialsItem from "./testimonialsItem";
import cta from "./cta";
import footer from "./footer";
import pricingItem from "./pricingItem";
import pricing from "./pricing";
import contact from "./contact";
import policy from "./policy";
import notFound from "./notFound";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    header,
    hero,
    feature,
    item,
    testimonials,
    testimonialsItem,
    cta,
    footer,
    pricing,
    pricingItem,
    contact,
    policy,
    notFound,
  ]),
});
