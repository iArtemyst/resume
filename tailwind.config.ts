import type { Config } from "tailwindcss";

// import * as themeColors from "./app/theme/indexcolors"
// import * as themeText from "./app/theme/indextext"

export const accentColor: string = "#20F38A";
export const baseColor: string = "#fafafa";
export const baseVariant: string = "#111111";
export const textColor: string = "#111111";
export const textVariant: string = "#fcfcfc";
export const priColor: string = "#FAFAFA";
export const secColor: string = "#DADADA";
export const tirColor: string = "#333333";
export const hoverTextColor: string = "#EEEEEE";
export const gradientColor1: string = "#DE07FF";
export const gradientColor2: string = "#BA05E7";
export const gradientColor3: string = "#7402B8";
export const gradientColor4: string = "#4F009F";

export const textXXS = "8px";
export const textXS = "10px";
export const textSml = "12px";
export const textMed = "16px";
export const textLrg = "20px";
export const textXL = "32px";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        baseColor: baseColor,
        baseVariant: baseVariant,
        textColor: textColor,
        accentColor: accentColor,
        textVariant: textVariant,
        priColor: priColor,
        secColor: secColor,
        tirColor: tirColor,
        hoverTextColor: hoverTextColor,
        gradientColor1: gradientColor1,
        gradientColor2: gradientColor2,
        gradientColor3: gradientColor3,
        gradientColor4: gradientColor4,
      },
      fontSize: {
        textXXS: textXXS,
        textXS: textXS,
        textSmall: textSml,
        textMedium: textMed,
        textLarge: textLrg,
        textXL: textXL,
      }
    },
  },
  plugins: [],
} satisfies Config;
