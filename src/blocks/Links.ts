import { Block } from "payload/types";

import linkGroup from "../fields/linkGroup";

const Links: Block = {
  slug: "links",
  fields: [
    linkGroup({
      appearances: ["primary", "secondary"],
      overrides: {
        maxRows: 20,
      },
    }),
  ],
};

export default Links;
