import { CollectionConfig } from "payload/types";

import Hero from ".././blocks/Hero";
import Image from ".././blocks/Image";
import RecentPosts from ".././blocks/RecentPosts";
import RichText from ".././blocks/RichText";
import Links from ".././blocks/Links";

import slugField from ".././fields/slugField";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
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
      name: "meta",
      type: "json",
      label: "Meta",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Page Content",
          name: "content",
          fields: [
            slugField(),
            {
              name: "layout",
              type: "blocks",
              label: "Layout",
              blocks: [Hero, Image, RecentPosts, RichText, Links],
            },
          ],
        },
        {
          label: "Seo Configurations",
          name: "seo",
          fields: [
            {
              name: "settings",
              type: "array",
              label: "Settings",
              fields: [
                {
                  name: "name",
                  type: "text",
                },
                {
                  name: "value",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
