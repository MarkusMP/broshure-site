export default {
  name: "cta",
  type: "document",
  title: "Cta Section",
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
  ],
};
