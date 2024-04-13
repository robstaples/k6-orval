import { defineConfig } from "orval";
// import "dotenv/config";
import path from "path";

const target = path.join(__dirname, "pkg", "swagger.yml"); // Path to OpenAPI spec file
export default defineConfig({
  axios: {
    input: {
      target: target,
      validation: false,
    },
    output: {
      mode: "tags",
      target: ".axios/index.ts",
      schemas: ".axios/types",
      client: "axios-functions",
    },
  },
});
