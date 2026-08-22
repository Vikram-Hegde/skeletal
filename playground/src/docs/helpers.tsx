import { Box, Stack } from "@elemental";
import type { CSSProperties, ReactNode } from "react";

export const cell = (label: string): ReactNode => <div className="docs-cell">{label}</div>;

export const tag = (label: string): ReactNode => <span className="docs-tag">{label}</span>;

export const avatar = (label: string): ReactNode => <div className="docs-avatar">{label}</div>;

export interface DemoCardProps {
  title: string;
  text?: string;
  footer?: ReactNode;
  style?: CSSProperties;
}

export function DemoCard({ title, text, footer, style }: DemoCardProps): ReactNode {
  const childCount = 1 + (text ? 1 : 0) + (footer ? 1 : 0);
  return (
    <Box
      className="docs-card"
      border="1px solid var(--docs-border)"
      background="var(--docs-panel)"
      padding="1rem"
      style={style}
    >
      <Stack
        className="docs-card__stack"
        space="0.375rem"
        {...(footer ? { splitAfter: childCount } : {})}
      >
        <p className="docs-card__title">{title}</p>
        {text ? <p className="docs-card__text">{text}</p> : null}
        {footer ? <div className="docs-card__footer">{footer}</div> : null}
      </Stack>
    </Box>
  );
}
