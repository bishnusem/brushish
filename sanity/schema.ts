import { type SchemaTypeDefinition } from "sanity";
import headerSchema from "./schemas/headerSchema";
import heroSchema from "./schemas/heroSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSchema, heroSchema],
};
