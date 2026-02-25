import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  // If you need custom ignores, add them here, 
  // but let Next.js handle its own .next folder.
  {
    ignores: ["build/**", "out/**"],
  },
];

export default eslintConfig;