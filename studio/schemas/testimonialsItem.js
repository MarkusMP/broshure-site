export default {
  name: "testimonialsItem",
  type: "document",
  title: "Testimonials Item",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    { type: "string", name: "title", title: "Name" },
    { type: "string", name: "description", title: "Description" },
    {
      name: "image",
      type: "image",
      title: "Hero image",
    },
    {
      name: "imageAlt",
      type: "string",
      title: "Description of image",
    },
  ],
};
