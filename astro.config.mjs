// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://izzydoesizzy.github.io",
  base: "/leigh-ann-services/",
  // Old preview URLs, kept working after the Teal & Clay theme became the main site.
  redirects: {
    "/new": "/leigh-ann-services/",
    "/new/capability-brief": "/leigh-ann-services/capability-brief/",
  },
});
