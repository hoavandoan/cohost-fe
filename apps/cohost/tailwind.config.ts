import tailwindConfig from "@cohost/tailwind-config";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Omit<Config, "content"> = {
  darkMode: ["class"],
  presets: [tailwindConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
