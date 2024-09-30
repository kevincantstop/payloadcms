import { Block } from "payload/types";

import linkGroup from "../fields/linkGroup";

const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
    },
    {
      name: "subheading",
      label: "Subheading",
      type: "text",
    },
    linkGroup({
      appearances: ["primary", "secondary"],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
};

export default Hero;
