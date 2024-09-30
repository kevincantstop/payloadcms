import type { GlobalConfig } from "payload/types";

import linkGroup from "../fields/linkGroup";

const Settings: GlobalConfig = {
  slug: "settings",
  fields: [
    linkGroup({
      appearances: ["primary", "secondary"],
      overrides: {
        maxRows: 20,
      },
    }),
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
};

export default Settings;
