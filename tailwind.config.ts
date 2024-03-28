import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      workbench: 'Workbench'
    },
    backgroundColor: {
      'square': '#eee',
      'slate-200':  'rgb(226 232 240)'

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
