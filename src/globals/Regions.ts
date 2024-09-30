import type { GlobalConfig } from "payload/types";

import Hero from "../blocks/Hero";
import Image from "../blocks/Image";
import RecentPosts from "../blocks/RecentPosts";
import RichText from "../blocks/RichText";
import Links from "../blocks/Links";

const Regions: GlobalConfig = {
  slug: "regions",
  fields: [
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
