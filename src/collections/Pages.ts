import { CollectionConfig } from "payload/types";

import Hero from ".././blocks/Hero";
import Image from ".././blocks/Image";
import RecentPosts from ".././blocks/RecentPosts";
import RichText from ".././blocks/RichText";

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
      blocks: [Hero, Image, RecentPosts, RichText],
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      label: "Author",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      label: "Categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Pages;
