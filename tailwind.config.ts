import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      workbench: 'Workbench'
    },
    backgroundColor: {
      'square': '#eee'
    },
    boxShadow: {
      'square': '0px 4px #ddd'
    },
    maxWidth: {
      '23': '23rem'
    },
    extend: {},
  },
  plugins: [],
};
export default config;
