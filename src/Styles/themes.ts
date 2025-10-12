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

/* === STELLAR THEME (Futuristic & Sleek) === */
export const stellarTheme: Theme = {
  name: "stellar",
  colors: {
    background: "#0B0C10",
    foreground: "#E6F1F3",
    primary: "#45A29E",
    primaryHover: "#66FCF1",
    secondary: "#1F2833",
    accent: "#5DADE2",
    border: "#45A29E",
    card: "",
    muted: ""
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
    sm: "0 2px 4px rgba(102,252,241,0.08)",
    md: "0 4px 8px rgba(102,252,241,0.15)",
    lg: "0 8px 16px rgba(102,252,241,0.25)",
  },
};

/* === BLOOM THEME (Soft & Playful) === */
export const bloomTheme: Theme = {
  name: "bloom",
  colors: {
    background: "#FFF9FB", // warm blush
    foreground: "#3A1E1E", // darker rose-brown for better readability
    primary: "#FF5CA8", // slightly deeper pink for contrast
    primaryHover: "#FF7BB8", // gentle hover
    secondary: "#FFE5F0", // soft pastel pink with more contrast
    accent: "#F28CA8", // balanced coral tone
    border: "#F7A8C8",
    card: "",
    muted: ""
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
    sm: "0 2px 4px rgba(255,92,168,0.15)",
    md: "0 4px 8px rgba(255,92,168,0.2)",
    lg: "0 8px 16px rgba(255,92,168,0.25)",
  },
};

/* === MINIMALIST THEME (Neutral & Balanced) === */
export const minimalistTheme: Theme = {
  name: "minimalist",
  colors: {
    background: "#FAFAFA", // softer white for contrast
    foreground: "#111111",
    primary: "#2D2D2D",
    primaryHover: "#3F3F3F",
    secondary: "#EDEDED", // more visible against background
    accent: "#B0B0B0", // darker accent for better visibility
    border: "#BFBFBF",
    card: "",
    muted: ""
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
    sm: "0 1px 3px rgba(0,0,0,0.06)",
    md: "0 2px 5px rgba(0,0,0,0.08)",
    lg: "0 4px 10px rgba(0,0,0,0.12)",
  },
};

export const themes = {
  stellar: stellarTheme,
  bloom: bloomTheme,
  minimalist: minimalistTheme,
};
