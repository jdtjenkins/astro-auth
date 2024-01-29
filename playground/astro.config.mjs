import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import packageName from "astro-auth";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), packageName()],
});
