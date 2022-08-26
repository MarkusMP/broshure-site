export default {
  name: "policy",
  type: "document",
  title: "Policy",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "date",
      type: "string",
      title: "Last Updated",
    },
    {
      name: "policy",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      blocks: "blocks",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block) => block._type === "block"
      );
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
      };
    },
  },
};
