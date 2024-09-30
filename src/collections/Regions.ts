import { CollectionConfig } from "payload/types";

import Hero from "../blocks/Hero";
import Image from "../blocks/Image";
import RecentPosts from "../blocks/RecentPosts";
import RichText from "../blocks/RichText";
import Links from "../blocks/Links";

const Regions: CollectionConfig = {
  slug: "regions",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
    },
    {
      name: "region",
      type: "array",
      label: "Region",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "layout",
          type: "blocks",
          label: "Layout",
          blocks: [Hero, Image, RecentPosts, RichText, Links],
        },
      ],
    },
  ],
};

export default Regions;
