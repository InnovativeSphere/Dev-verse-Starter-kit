import { type FC } from "react";
import { themes, type ThemeName } from "../Styles/themes";

interface GalleryHeaderProps {
  title: string;
  subtitle: string;
  variantText?: string; // must be string if we want split logic
  variant?: ThemeName;
}

export const GalleryHeader: FC<GalleryHeaderProps> = ({
  title,
  subtitle,
  variantText,
  variant = "helio",
}) => {
  const theme = themes[variant];

  // If variantText exists and is found in subtitle, split it; else, render normally
  let preText = subtitle;
  let postText = "";

  if (variantText && subtitle.includes(variantText)) {
    const index = subtitle.indexOf(variantText);
    preText = subtitle.slice(0, index);
    postText = subtitle.slice(index + variantText.length);
  }

  return (
    <header className="text-center mb-10 md:pb-20 mt-20">
      <h2
        className="text-3xl md:text-4xl font-semibold"
        style={{ color: theme.colors.foreground }}
      >
        {title}
      </h2>
      <p
        className="text-sm md:text-base mt-2 opacity-80 max-w-xl mx-auto"
        style={{ color: theme.colors.muted }}
      >
        {preText}
        {variantText && <span style={{ color: theme.colors.accent, fontWeight: 500 }}>{variantText}</span>}
        {postText}
      </p>
    </header>
  );
};
