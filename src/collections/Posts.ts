import { CollectionConfig } from "payload/types";

import Hero from ".././blocks/Hero";
import Image from ".././blocks/Image";
import RecentPosts from ".././blocks/RecentPosts";
import RichText from ".././blocks/RichText";
import Categories from "./Categories";

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

export default Posts;
