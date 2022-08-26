export default {
  name: "hero",
  type: "document",
  title: "Hero Section",
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
      name: "btnText",
      type: "string",
      title: "Button text",
    },
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
