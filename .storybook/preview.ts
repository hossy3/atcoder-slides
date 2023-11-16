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
      storySort: (a, b) => {
        if (a.id === b.id) {
          return 0;
        }
        if (!a.id.startsWith("abc") && !b.id.startsWith("abc")) {
          return a.id.localeCompare(b.id);
        }
        if (!a.id.startsWith("abc") && b.id.startsWith("abc")) {
          return -1;
        }
        if (a.id.startsWith("abc") && !b.id.startsWith("abc")) {
          return 1;
        }
        if (a.id.substring(0, 6) === b.id.substring(0, 6)) {
          if (!a.id.includes("-ex-") && b.id.includes("-ex-")) {
            return -1;
          }
          if (a.id.includes("-ex-") && !b.id.includes("-ex-")) {
            return 1;
          }
          return a.id.localeCompare(b.id);
        }
        return -a.id.localeCompare(b.id);
      },
    },
  },
};

export default preview;
