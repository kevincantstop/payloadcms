import { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      label: "Slug",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [
        // Define your blocks here
      ],
    },
  ],
};

export default Pages;
