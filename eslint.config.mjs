import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig(
  // 1) Global ignores — flat config does NOT read .eslintignore anymore; ignores live here.
  { ignores: ["dist/**", "node_modules/**", "coverage/**"] },

  // 2) The actual rules, applied to JS/TS files.
  {
    files: ["**/*.{js,mjs,ts}"],
    extends: [
      js.configs.recommended, // ESLint's baseline good-practice rules
      tseslint.configs.recommended, // typescript-eslint's recommended rules
    ],
  },

  // 3) MUST be last: disables every formatting rule so Prettier is the sole authority on layout.
  eslintConfigPrettier,
);
