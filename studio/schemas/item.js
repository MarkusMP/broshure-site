export default {
  name: "item",
  type: "document",
  title: "Feature Item",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    { type: "string", name: "title", title: "Title" },
    { type: "string", name: "description", title: "Description" },
  ],
};
