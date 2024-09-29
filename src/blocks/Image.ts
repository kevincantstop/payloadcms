import { Block } from "payload/types";

const Image: Block = {
  slug: "image",
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Image;
