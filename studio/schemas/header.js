export default {
  name: "header",
  type: "document",
  title: "Header Navigation",
  // __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "logo",
      type: "string",
      title: "Logo",
    },
    {
      name: "pricing",
      type: "string",
      title: "Pricing Nav Link",
    },
    {
      name: "home",
      type: "string",
      title: "Home Nav Link",
    },
    {
      name: "about",
      type: "string",
      title: "About Nav Link",
    },
    {
      name: "contact",
      type: "string",
      title: "Contact Nav Link",
    },
    {
      name: "testimonials",
      type: "string",
      title: "Testimonials Nav Link",
    },
    {
      name: "btn",
      type: "string",
      title: "Btn Text",
    },
  ],
};
