import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import openapiBackend from "@astro-openapi/backend";
import openapiTypegen from "@astro-openapi/typegen";
import openapiBundler from "@astro-openapi/bundler";
import openapiClient from "@astro-openapi/client";

import openapiGuiSwagger from "@astro-openapi/gui-swagger";
import openapiGuiElements from "@astro-openapi/gui-elements";
import openapiGuiRedoc from "@astro-openapi/gui-redoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
});
