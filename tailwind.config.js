/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        twitterDark: {
          primary: '#1DA1F2',
          'primary-focus': '#0C85D0',
          'primary-content': '#ffffff',
          secondary: '#1DA1F2',
          'secondary-focus': '#0C85D0',
          'secondary-content': '#ffffff',
          accent: '#1DA1F2',
          'accent-focus': '#0C85D0',
          'accent-content': '#ffffff',
          neutral: '#171717',
          'neutral-focus': '#0A0A0A',
          'neutral-content': '#ededed',
          'base-100': '#15202B',
          'base-200': '#10171E',
          'base-300': '#0A0F14',
          'base-content': '#ededed',
          info: '#1DA1F2',
          success: '#17BF63',
          warning: '#FFAD1F',
          error: '#E0245E',
        },
      },
    ],
  },
};
