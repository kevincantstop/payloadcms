import { CollectionConfig } from "payload/types";

import slugField from ".././fields/slugField";

const Categories: CollectionConfig = {
  slug: "categories",
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Name",
    },
    slugField(),
  ],
};

export default Categories;
