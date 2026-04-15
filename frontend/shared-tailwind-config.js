(function () {
  if (!window.tailwind) {
    return;
  }

  window.tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "surface-container-highest": "#d3e4ff",
          "on-secondary-container": "#505157",
          "surface-container-lowest": "#ffffff",
          "on-primary-fixed": "#003c86",
          "error-container": "#fe8983",
          "primary-container": "#d8e2ff",
          "primary-fixed-dim": "#c3d4ff",
          tertiary: "#5f5c78",
          "outline-variant": "#87b5f0",
          "surface-container-high": "#dce9ff",
          "inverse-surface": "#010f20",
          "tertiary-fixed": "#d3ceef",
          "error-dim": "#4e0309",
          "on-tertiary-fixed": "#34314b",
          "tertiary-container": "#d3ceef",
          "on-tertiary": "#fcf7ff",
          "secondary-fixed-dim": "#d4d4db",
          "tertiary-fixed-dim": "#c5c0e0",
          "surface-tint": "#005ac2",
          "secondary-fixed": "#e2e2e9",
          "on-surface": "#00345e",
          "on-tertiary-fixed-variant": "#504e69",
          secondary: "#5e5f65",
          "surface-dim": "#c4dcff",
          "surface-bright": "#f8f9ff",
          "on-secondary-fixed-variant": "#5a5b61",
          "on-primary": "#f7f7ff",
          background: "#f8f9ff",
          error: "#9f403d",
          "on-primary-fixed-variant": "#0057bd",
          "primary-fixed": "#d8e2ff",
          "primary-dim": "#004fab",
          primary: "#005ac2",
          "secondary-container": "#e2e2e9",
          "on-error": "#fff7f6",
          "on-surface-variant": "#306197",
          "secondary-dim": "#515359",
          surface: "#f8f9ff",
          "on-tertiary-container": "#47445f",
          "on-secondary": "#f9f8ff",
          "on-secondary-fixed": "#3e3f45",
          "on-background": "#00345e",
          "on-error-container": "#752121",
          "inverse-primary": "#4d8eff",
          "tertiary-dim": "#53506b",
          "surface-container-low": "#eff4ff",
          outline: "#4f7db5",
          "surface-variant": "#d3e4ff",
          "on-primary-container": "#004eaa",
          "inverse-on-surface": "#8f9eb4",
          "surface-container": "#e6eeff"
        },
        borderRadius: {
          DEFAULT: "0.25rem",
          lg: "0.5rem",
          xl: "0.75rem",
          full: "9999px"
        },
        fontFamily: {
          headline: ["Inter"],
          body: ["Inter"],
          label: ["Inter"]
        }
      }
    }
  };
})();
