import {
  ANYONE_CAN,
  createBuilder,
  createSchema,
  definePermissions,
  number,
  string,
  table,
} from "@rocicorp/zero";

const users = table("users")
  .columns({
    id: string(),
    firstName: string().from("first_name").optional(),
    lastName: string().from("last_name").optional(),
    companyId: string().from("company_id").optional(),
    companyRole: string().from("company_role").optional(),
    createdAt: number().from("created_at"),
    updatedAt: number().from("updated_at"),
  })
  .primaryKey("id");

export const schema = createSchema({
  tables: [users],
});

export const builder = createBuilder(schema);

export const permissions = definePermissions<typeof schema>(schema, () => ({
  users: {
    row: {
      select: ANYONE_CAN,
      insert: ANYONE_CAN,
      update: ANYONE_CAN,
      delete: ANYONE_CAN,
    },
  },
}));

export type Schema = typeof schema;
