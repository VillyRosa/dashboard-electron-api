import globals from "globals";
import pluginJs, { configs } from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];