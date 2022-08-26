export default {
  name: "testimonials",
  type: "document",
  title: "Testimonials Section",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "btnText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "testimonialsItem" }],
    },
  ],
};
