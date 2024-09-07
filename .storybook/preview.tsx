import type { Preview } from "@storybook/react";
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import ThemeProvider from "../src/components/ThemeProvider";
import defaultTheme from "../src/constants/defaultTheme";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
