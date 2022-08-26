export default {
  name: "pricing",
  type: "document",
  title: "Pricing Section",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "pricingItem" }],
    },
  ],
};
