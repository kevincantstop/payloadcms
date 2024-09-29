import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
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
      label: "Slug",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      type: "blocks",
      label: "Layout",
      blocks: [],
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      label: "Author",
    },
  ],
};

export default Posts;
