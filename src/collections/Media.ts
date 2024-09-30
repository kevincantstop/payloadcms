import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../../media"),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["link"],
        },
      }),
    },
  ],
};

export default Media;
