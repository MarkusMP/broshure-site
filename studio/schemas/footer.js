export default {
  name: "footer",
  type: "document",
  title: "Footer",
  // __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "logo",
      type: "string",
      title: "Logo Text",
    },
    {
      name: "facebook",
      type: "string",
      title: "Facebook Link (Leave empty if you don't have one)",
    },
    {
      name: "instagram",
      type: "string",
      title: "Instagram Link (Leave empty if you don't have one)",
    },
    {
      name: "twitter",
      type: "string",
      title: "Twitter Link (Leave empty if you don't have one)",
    },
    {
      name: "btnText",
      type: "string",
      title: "btnText",
    },
    {
      name: "home",
      type: "string",
      title: "Link Home",
    },
    {
      name: "pricing",
      type: "string",
      title: "Link Pricing",
    },
    {
      name: "contact",
      type: "string",
      title: "Link Contact",
    },
    {
      name: "about",
      type: "string",
      title: "Link About",
    },
    {
      name: "testimonials",
      type: "string",
      title: "Link Testimonials",
    },
    {
      name: "policy",
      type: "string",
      title: "Link Policy",
    },
  ],
};
