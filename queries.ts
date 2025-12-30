import { defineQueries, defineQuery } from "@rocicorp/zero";
import { builder } from "./schema";

export const queries = defineQueries({
  allUsers: defineQuery(({ ctx }) => builder.users),
});
