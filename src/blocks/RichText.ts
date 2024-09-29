import { Block } from "payload/types";

const RichText: Block = {
  slug: "richtext",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
  ],
};

export default RichText;
