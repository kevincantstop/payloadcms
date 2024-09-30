import { CollectionConfig } from "payload/types";

import Hero from ".././blocks/Hero";
import Image from ".././blocks/Image";
import RecentPosts from ".././blocks/RecentPosts";
import RichText from ".././blocks/RichText";
import Links from ".././blocks/Links";

import slugField from ".././fields/slugField";

const Posts: CollectionConfig = {
  slug: "posts",
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    slugField(),
    {
      name: "layout",
      type: "blocks",
      label: "Layout",
      blocks: [Hero, Image, RecentPosts, RichText, Links],
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
      name: "hide",
      type: "checkbox",
      label: "Hide",
      defaultValue: false,
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
