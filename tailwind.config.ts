// // tailwind.config.ts
// import type { Config } from "tailwindcss";
// import daisyui from "daisyui";

// const config: Config = {
//   content: [
//     "./src/app/**/*.{ts,tsx}",
//     "./src/components/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],

//   // ⬇️ This replaces your CSS @plugin "daisyui" + @plugin "daisyui/theme" blocks
//   daisyui: {
//     // Order defines default (first = default). You can also add darkTheme: "dark"
//     themes: [
//       {
//         light: {
//           // DaisyUI base colors for the light theme:
//           "base-100": "#ffffff",
//           "base-content": "#171717",

//           // Your custom CSS vars (you can keep using them in CSS via var(--...))
//           "--color-primary-btn": "red",
//           "--color-primary-btn-hover": "#cb0404",
//           "--color-secondary-btn-hover": "#e54646",
//           "--color-card": "#feeeee",
//           "--color-secondary-bg": "#f3f2ec",
//           "--color-third-bg": "#1e93ab",
//         },
//       },
//       {
//         dark: {
//           // DaisyUI base colors for the dark theme:
//           "base-100": "#0a0a0a",
//           "base-content": "#ffffff",

//           // Your custom CSS vars for dark:
//           "--color-primary-btn": "red",
//           "--color-primary-btn-hover": "#1c96e1",
//           // If you want a single global text color var:
//           "--color-base-content": "white",
//         },
//       },
//       "cupcake",
//     ],
//     darkTheme: "dark",
//   },
// };

// export default config;
