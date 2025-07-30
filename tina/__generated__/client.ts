import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '7287c6a2717a3f9ff07324f302b653d58000f316', queries,  });
export default client;
  