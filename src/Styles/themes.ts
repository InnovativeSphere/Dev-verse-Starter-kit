export interface Theme {
  name: string;
  colors: {
    [x: string]: any;
    card: string;
    muted: string;
    background: string;
    foreground: string;
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    border: string;
  };
  fontFamily: string;
  fontSizes: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

/* === 🌌 STELLAR THEME (Futuristic & Sleek) === */
export const stellarTheme: Theme = {
  name: "stellar",
  colors: {
    background: "#0B0C10", // Deep cosmic blue-black
    foreground: "#F2FBFB", // Softer white for clarity
    primary: "#45A29E",
    primaryHover: "#66FCF1",
    secondary: "#1F2833",
    accent: "#5DADE2",
    border: "#66FCF1",
    card: "rgba(15, 20, 25, 0.65)", // Glass effect
    muted: "rgba(255, 255, 255, 0.7)", // Readable muted text
  },
  fontFamily: "'Inter', sans-serif",
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  shadows: {
    sm: "0 2px 6px rgba(102, 252, 241, 0.1)",
    md: "0 4px 12px rgba(102, 252, 241, 0.2)",
    lg: "0 8px 24px rgba(102, 252, 241, 0.3)",
  },
};

/* === 🌸 BLOOM THEME (Soft & Playful) === */
export const bloomTheme: Theme = {
  name: "bloom",
  colors: {
    background: "#FFF8FA", // Warm blush pink
    foreground: "#42222A", // Deep rose-brown for contrast
    primary: "#FF5CA8", // Vivid pink
    primaryHover: "#FF7BB8", // Gentle hover shade
    secondary: "#FFE5F0", // Pastel soft pink
    accent: "#F28CA8", // Balanced coral
    border: "#F7A8C8", // Soft border pink
    card: "rgba(255, 255, 255, 0.8)", // Light glass background
    muted: "rgba(80, 40, 50, 0.7)", // Softer readable muted text
  },
  fontFamily: "'Poppins', sans-serif",
  fontSizes: {
    sm: "0.9rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.75rem",
  },
  radii: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },
  shadows: {
    sm: "0 2px 4px rgba(255, 92, 168, 0.15)",
    md: "0 4px 8px rgba(255, 92, 168, 0.2)",
    lg: "0 8px 16px rgba(255, 92, 168, 0.25)",
  },
};

/* === ⚪ MINIMALIST THEME (Neutral & Balanced) === */
export const minimalistTheme: Theme = {
  name: "minimalist",
  colors: {
    background: "#F9FAFB", // Slightly warm white
    foreground: "#1A1A1A", // Deep neutral black for text
    primary: "#2D2D2D",
    primaryHover: "#3F3F3F",
    secondary: "#E5E7EB", // Subtle gray for cards
    accent: "#9CA3AF", // Medium gray accent
    border: "#D1D5DB", // Softer border gray
    card: "rgba(255, 255, 255, 0.85)", // Light frosted card
    muted: "rgba(26, 26, 26, 0.6)", // Medium contrast muted text
  },
  fontFamily: "'Roboto', sans-serif",
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
  },
  radii: {
    sm: "2px",
    md: "6px",
    lg: "10px",
  },
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.06)",
    md: "0 2px 5px rgba(0, 0, 0, 0.08)",
    lg: "0 4px 10px rgba(0, 0, 0, 0.12)",
  },
};

export const themes = {
  stellar: stellarTheme,
  bloom: bloomTheme,
  minimalist: minimalistTheme,
};
