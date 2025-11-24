export type ColorKey =
  | "background"
  | "foreground"
  | "primary"
  | "primaryHover"
  | "secondary"
  | "accent"
  | "border"
  | "card"
  | "muted";

export type FontSizeKey = "xs" | "sm" | "md" | "lg" | "xl";
export type RadiusKey = "sm" | "md" | "lg";
export type ShadowKey = "sm" | "md" | "lg";
export type SpacingKey = "xs" | "sm" | "md" | "lg" | "xl";

export interface Theme {
  name: string;
  colors: Record<ColorKey, string>;
  fontFamily: string;
  fontSizes: Record<FontSizeKey, string>;
  radii: Record<RadiusKey, string>;
  shadows: Record<ShadowKey, string>;
  spacing: Record<SpacingKey, string>;
}

const baseFontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.5rem",
};

const baseRadii = {
  sm: "4px",
  md: "8px",
  lg: "12px",
};

const baseShadows = {
  sm: "0 1px 3px rgba(0,0,0,0.1)",
  md: "0 3px 6px rgba(0,0,0,0.15)",
  lg: "0 6px 12px rgba(0,0,0,0.2)",
};

const baseSpacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
};

export const helioTheme: Theme = {
  name: "helio",
  colors: {
    background: "#FFF4D6",
    foreground: "#2F2A1F",
    primary: "#FFB400",
    primaryHover: "#FFD27A",
    secondary: "#FFE7B8",
    accent: "#FF8A00",
    border: "#EEC777",
    card: "rgba(255, 255, 240, 0.85)",
    muted: "rgba(47, 42, 31, 0.6)",
  },
  fontFamily: "'Nunito', sans-serif",
  fontSizes: baseFontSizes,
  radii: baseRadii,
  shadows: baseShadows,
  spacing: baseSpacing,
};

export const equinoxTheme: Theme = {
  name: "equinox",
  colors: {
    background: "#F7EDE2",
    foreground: "#3E2F25",
    primary: "#C26D3F",
    primaryHover: "#D88A63",
    secondary: "#EBD3C3",
    accent: "#A44F2A",
    border: "#D0B5A4",
    card: "rgba(255, 250, 245, 0.9)",
    muted: "rgba(62, 47, 37, 0.6)",
  },
  fontFamily: "'Merriweather', serif",
  fontSizes: baseFontSizes,
  radii: baseRadii,
  shadows: baseShadows,
  spacing: baseSpacing,
};

export const glaciaTheme: Theme = {
  name: "glacia",
  colors: {
    background: "#E9F4FF",
    foreground: "#1E2A35",
    primary: "#4DA3FF",
    primaryHover: "#76B9FF",
    secondary: "#D4E6F7",
    accent: "#94CCFF",
    border: "#A8CDED",
    card: "rgba(245, 250, 255, 0.9)",
    muted: "rgba(30, 42, 53, 0.6)",
  },
  fontFamily: "'Inter', sans-serif",
  fontSizes: baseFontSizes,
  radii: baseRadii,
  shadows: baseShadows,
  spacing: baseSpacing,
};

export const floraTheme: Theme = {
  name: "flora",
  colors: {
    background: "#F3FFF6",
    foreground: "#213328",
    primary: "#4CAF50",
    primaryHover: "#7EDC82",
    secondary: "#D9F5DE",
    accent: "#8BE29B",
    border: "#BEEAC8",
    card: "rgba(240, 255, 245, 0.9)",
    muted: "rgba(33, 51, 40, 0.6)",
  },
  fontFamily: "'Quicksand', sans-serif",
  fontSizes: baseFontSizes,
  radii: baseRadii,
  shadows: baseShadows,
  spacing: baseSpacing,
};

export const monoTheme: Theme = {
  name: "mono",
  colors: {
    background: "#FAFAFA",
    foreground: "#1A1A1A",
    primary: "#2D2D2D",
    primaryHover: "#3A3A3A",
    secondary: "#E5E5E5",
    accent: "#9A9A9A",
    border: "#D1D1D1",
    card: "rgba(255, 255, 255, 0.9)",
    muted: "rgba(26, 26, 26, 0.6)",
  },
  fontFamily: "'Roboto', sans-serif",
  fontSizes: baseFontSizes,
  radii: baseRadii,
  shadows: baseShadows,
  spacing: baseSpacing,
};

export const themes = {
  helio: helioTheme,
  equinox: equinoxTheme,
  glacia: glaciaTheme,
  flora: floraTheme,
  mono: monoTheme,
};

export type ThemeName = keyof typeof themes;
export const themeList: ThemeName[] = Object.keys(themes) as ThemeName[];
