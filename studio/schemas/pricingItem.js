export default {
  name: "pricingItem",
  type: "document",
  title: "Pricing Item",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    { type: "string", name: "title", title: "Name" },
    { type: "string", name: "description", title: "Description" },
    {
      name: "price",
      type: "string",
      title: "Price per month",
    },
    {
      name: "btnText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "pricingType",
      type: "string",
      title: "Pricing Type",
    },
    {
      name: "text1",
      type: "string",
      title: "Text 1",
    },
    {
      name: "text2",
      type: "string",
      title: "Text 2",
    },
    {
      name: "text3",
      type: "string",
      title: "Text 3",
    },
    {
      name: "text4",
      type: "string",
      title: "Text 4",
    },
    {
      name: "text5",
      type: "string",
      title: "Text 5",
    },
  ],
};
