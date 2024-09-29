import { CollectionConfig } from "payload/types";

import slugField from ".././fields/slugField";

const Categories: CollectionConfig = {
  slug: "categories",
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
