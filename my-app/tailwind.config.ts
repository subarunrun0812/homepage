import type { Config } from "tailwindcss";
// Tailwind CSS 設定ファイル

const config: Config = {
  // Tailwindcssで使用可能なファイルパス
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // テーマ設定
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // 使用するプラグイン
  plugins: [],
};

export default config;
