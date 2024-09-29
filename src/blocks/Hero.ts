import { Block } from "payload/types";

const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "richText",
      required: true,
    },
    {
      name: "subheading",
      label: "Subheading",
      type: "text",
    },
  ],
};

export default Hero;
