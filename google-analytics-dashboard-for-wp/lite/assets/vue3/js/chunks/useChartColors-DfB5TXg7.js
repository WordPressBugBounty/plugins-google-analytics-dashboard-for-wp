const colorCardBackground = "#F4F3F7";
const colorLinkHover = "#393f4c";
const colorWarning = "#ffaa00";
const colorDelete = "#dc3232";
const colorOrange = "#f2994a";
const colorBlue = "#509fe2";
const colorPurple = "#6528f5";
const brandName = "exactmetrics";
const vars = {
  colorCardBackground,
  colorLinkHover,
  colorWarning,
  colorDelete,
  colorOrange,
  colorBlue,
  colorPurple,
  brandName
};
const brandConfig = {
  name: vars.brandName,
  // Brand-specific icon paths
  icons: {
    logoFallback: "logos/exactmetrics-header",
    emptyState: "templates/exactmetrics/create-new"
  },
  // All colors imported from SCSS (single source of truth)
  colors: {
    primary: vars.colorPrimary,
    primaryHover: vars.colorPrimaryHover,
    secondary: vars.colorSecondary,
    tertiary: vars.colorTertiary,
    // Buttons
    button: {
      background: vars.btnBackground,
      backgroundHover: vars.btnBackgroundHover,
      backgroundFaux: vars.btnBackgroundFaux,
      border: vars.btnBorder,
      borderHover: vars.btnBorderHover,
      text: vars.btnText
    },
    buttonSecondary: {
      background: vars.btnSecondaryBackground,
      backgroundHover: vars.btnSecondaryBackgroundHover,
      border: vars.btnSecondaryBorder,
      borderHover: vars.btnSecondaryBorderHover,
      text: vars.btnSecondaryText
    },
    buttonGreen: {
      background: vars.btnGreenBackground,
      backgroundHover: vars.btnGreenBackgroundHover,
      border: vars.btnGreenBorder,
      borderHover: vars.btnGreenBorderHover,
      text: vars.btnGreenText
    },
    buttonRed: {
      background: vars.btnRedBackground,
      border: vars.btnRedBorder,
      text: vars.btnRedText
    },
    buttonDisabled: {
      background: vars.btnDisabledBackground,
      border: vars.btnDisabledBorder,
      text: vars.btnDisabledText
    },
    // Status colors
    success: vars.colorSuccess,
    error: vars.colorError,
    warning: vars.colorWarning,
    info: vars.colorInfo,
    delete: vars.colorDelete,
    // Layout
    body: vars.colorBody,
    header: vars.colorHeader,
    cardBackground: vars.colorCardBackground,
    border: vars.colorBorder,
    // Text
    text: {
      dark: vars.textDark,
      primary: vars.textPrimary,
      secondary: vars.textSecondary,
      muted: vars.textMuted,
      highlight: vars.textHighlight
    },
    // Forms
    input: {
      border: vars.inputBorder,
      placeholder: vars.inputPlaceholder
    },
    // Links
    link: vars.colorLink,
    linkHover: vars.colorLinkHover,
    // Navigation
    navigation: {
      link: vars.navLink,
      linkActive: vars.navLinkActive
    },
    // Misc
    checkbox: {
      background: vars.checkboxBackground,
      backgroundFaux: vars.checkboxBackgroundFaux
    },
    infoIcon: vars.infoIcon,
    tooltip: vars.tooltip,
    purple: vars.colorPurple,
    orange: vars.colorOrange,
    blue: vars.colorBlue
  },
  // Chart color palette (uses SCSS primary + custom chart colors)
  chartColors: [
    "#6528F5",
    // Primary Purple (Figma)
    "#A735DF",
    // Magenta Purple (Figma)
    "#0AA9BF",
    // Cyan/Teal (Figma)
    "#E63060",
    // Pink/Red (Figma)
    "#B0BDC8",
    // Light Gray/Blue (Figma)
    vars.colorPrimaryHover,
    // Dark Purple (from SCSS)
    vars.btnGreenBackgroundHover,
    // Green Hover (from SCSS)
    vars.btnSecondaryBackground,
    // Light Purple (from SCSS)
    vars.textMuted,
    // Purple Gray (from SCSS)
    vars.colorOrange
    // Orange (from SCSS)
  ]
};
function useChartColors() {
  const { colors, chartColors, name } = brandConfig;
  const getChartColors = (count = 10) => {
    if (count <= chartColors.length) {
      return chartColors.slice(0, count);
    }
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(chartColors[i % chartColors.length]);
    }
    return result;
  };
  const getColor = (colorName) => {
    return colors[colorName] || colors.primary;
  };
  return {
    colors: {
      primary: colors.button.background,
      secondary: colors.buttonGreen.background,
      tertiary: colors.tertiary,
      error: colors.error,
      warning: colors.warning,
      info: colors.info,
      success: colors.success,
      // Chart-specific colors
      palette: chartColors,
      // Text colors for labels
      text: colors.text,
      // Grid and border colors
      grid: colors.border,
      border: colors.border
    },
    getChartColors,
    getColor,
    brand: name
  };
}
export {
  brandConfig as b,
  useChartColors as u
};
