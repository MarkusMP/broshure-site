export default {
  name: "notFound",
  type: "document",
  title: "404 Page",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "description",
      type: "string",
      title: "404 Text",
    },
  ],
};
