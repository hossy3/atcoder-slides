import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "はじめに",
          "ABC312",
          "ABC310",
          "ABC309",
          "ABC308",
          "ABC306",
          "ABC305",
        ],
      },
      // (a, b) => (a.id === b.id ? 0 : b.id.localeCompare(b.Id)),
    },
  },
};

export default preview;
