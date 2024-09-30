import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "disabled",
      type: "checkbox",
      label: "Disabled",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["user"],
      options: [
        {
          label: "admin",
          value: "admin",
        },
        {
          label: "user",
          value: "user",
        },
      ],
    },
  ],
};

export default Users;
