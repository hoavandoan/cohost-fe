import tailwindConfig from "@cohost/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/components/**/*.tsx"],
  presets: [tailwindConfig],
};

export default config;
