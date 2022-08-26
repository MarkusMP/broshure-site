export default {
  name: "contact",
  type: "document",
  title: "Contact Page",
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
      name: "email",
      type: "string",
      title: "Email to receive messages",
    },
  ],
};
