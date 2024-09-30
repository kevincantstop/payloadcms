import { CollectionConfig } from "payload/types";

import linkGroup from "../fields/linkGroup";

const Settings: CollectionConfig = {
  slug: "settings",
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
      name: "settings",
      type: "array",
      label: "Settings",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              name: "value",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default Settings;
