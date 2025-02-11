/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Essa função agora retorna diretamente o nome do pacote
 * não é mais necessário resolver o caminho do package.json.
 */
function getAbsolutePath(value: string): string {
  return value;
}

const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*stories.mdx", 
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  }
};

export default config;
