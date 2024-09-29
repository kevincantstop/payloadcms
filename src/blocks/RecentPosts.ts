import { Block } from "payload/types";

const RecentPosts: Block = {
  slug: "recentPosts",
  fields: [
    {
      type: "number",
      name: "postsTotal",
      label: "Posts Total",
    },
  ],
};

export default RecentPosts;
