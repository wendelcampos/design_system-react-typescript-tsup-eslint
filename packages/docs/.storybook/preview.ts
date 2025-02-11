import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";
document.head.appendChild(link);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
