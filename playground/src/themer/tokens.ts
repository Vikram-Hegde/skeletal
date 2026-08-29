export type TokenType = "color" | "radius" | "shadow";

export interface TokenDef {
  name: string;
  label: string;
  type: TokenType;
  defaultValue: string;
  description: string;
  group: string;
}

export const TOKENS: TokenDef[] = [
  // Base surfaces
  {
    name: "--sk-background",
    label: "Background",
    type: "color",
    defaultValue: "light-dark(oklch(1 0 0), oklch(0.145 0 0))",
    description: "App background",
    group: "Base",
  },
  {
    name: "--sk-foreground",
    label: "Foreground",
    type: "color",
    defaultValue: "light-dark(oklch(0.145 0 0), oklch(0.985 0 0))",
    description: "Default text",
    group: "Base",
  },
  {
    name: "--sk-card",
    label: "Card",
    type: "color",
    defaultValue: "light-dark(oklch(1 0 0), oklch(0.205 0 0))",
    description: "Card surface",
    group: "Base",
  },
  {
    name: "--sk-popover",
    label: "Popover",
    type: "color",
    defaultValue: "light-dark(oklch(1 0 0), oklch(0.205 0 0))",
    description: "Popover / dropdown surface",
    group: "Base",
  },
  // Brand
  {
    name: "--sk-primary",
    label: "Primary",
    type: "color",
    defaultValue: "light-dark(oklch(0.145 0 0), oklch(0.985 0 0))",
    description: "Primary / ink",
    group: "Brand",
  },
  {
    name: "--sk-primary-foreground",
    label: "Primary FG",
    type: "color",
    defaultValue: "light-dark(oklch(0.985 0 0), oklch(0.145 0 0))",
    description: "On primary",
    group: "Brand",
  },
  {
    name: "--sk-secondary",
    label: "Secondary",
    type: "color",
    defaultValue: "light-dark(oklch(0.967 0 0), oklch(0.274 0 0))",
    description: "Secondary surface",
    group: "Brand",
  },
  {
    name: "--sk-muted",
    label: "Muted",
    type: "color",
    defaultValue: "light-dark(oklch(0.97 0 0), oklch(0.269 0 0))",
    description: "Muted surface / hover",
    group: "Brand",
  },
  {
    name: "--sk-muted-foreground",
    label: "Muted FG",
    type: "color",
    defaultValue: "light-dark(oklch(0.556 0 0), oklch(0.708 0 0))",
    description: "Muted text",
    group: "Brand",
  },
  {
    name: "--sk-accent",
    label: "Accent",
    type: "color",
    defaultValue: "light-dark(oklch(0.97 0 0), oklch(0.269 0 0))",
    description: "Accent / highlight",
    group: "Brand",
  },
  {
    name: "--sk-border",
    label: "Border",
    type: "color",
    defaultValue: "light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))",
    description: "Hairline borders",
    group: "Brand",
  },
  {
    name: "--sk-input",
    label: "Input border",
    type: "color",
    defaultValue: "light-dark(oklch(0.922 0 0), oklch(1 0 0 / 15%))",
    description: "Input outlines",
    group: "Brand",
  },
  {
    name: "--sk-ring",
    label: "Ring",
    type: "color",
    defaultValue: "light-dark(oklch(0.708 0 0), oklch(0.556 0 0))",
    description: "Focus ring",
    group: "Brand",
  },
  // Status
  {
    name: "--sk-destructive",
    label: "Destructive",
    type: "color",
    defaultValue: "light-dark(oklch(0.577 0.245 27.325), oklch(0.704 0.191 22.216))",
    description: "Error / delete",
    group: "Status",
  },
  {
    name: "--sk-success",
    label: "Success",
    type: "color",
    defaultValue: "light-dark(oklch(0.627 0.194 149.214), oklch(0.696 0.17 162.48))",
    description: "Success",
    group: "Status",
  },
  {
    name: "--sk-warning",
    label: "Warning",
    type: "color",
    defaultValue: "light-dark(oklch(0.795 0.184 86.047), oklch(0.828 0.189 84.429))",
    description: "Warning",
    group: "Status",
  },
  // Charts
  {
    name: "--sk-chart-1",
    label: "Chart 1",
    type: "color",
    defaultValue: "light-dark(oklch(0.87 0 0), oklch(0.72 0 0))",
    description: "Chart color 1",
    group: "Charts",
  },
  {
    name: "--sk-chart-2",
    label: "Chart 2",
    type: "color",
    defaultValue: "light-dark(oklch(0.556 0 0), oklch(0.66 0 0))",
    description: "Chart color 2",
    group: "Charts",
  },
  // Shape & shadow
  {
    name: "--sk-radius",
    label: "Radius",
    type: "radius",
    defaultValue: "0",
    description: "Corner radius (0 = sharp)",
    group: "Shape",
  },
  {
    name: "--sk-shadow-sm",
    label: "Shadow SM",
    type: "shadow",
    defaultValue: "light-dark(0 1px 2px oklch(0 0 0 / 4%), 0 1px 2px oklch(0 0 0 / 20%))",
    description: "Small elevation",
    group: "Shadow",
  },
  {
    name: "--sk-shadow-md",
    label: "Shadow MD",
    type: "shadow",
    defaultValue: "light-dark(0 16px 50px oklch(0 0 0 / 18%), 0 16px 50px oklch(0 0 0 / 45%))",
    description: "Card / popover",
    group: "Shadow",
  },
  {
    name: "--sk-shadow-lg",
    label: "Shadow LG",
    type: "shadow",
    defaultValue: "light-dark(0 24px 60px oklch(0 0 0 / 22%), 0 24px 60px oklch(0 0 0 / 55%))",
    description: "Modal / drawer",
    group: "Shadow",
  },
];

export const TOKEN_GROUPS = Array.from(new Set(TOKENS.map((t) => t.group)));
