import type { ReactNode } from "react";

export interface Example {
  title: string;
  code?: string;
  demo: ReactNode;
}

export interface DocProps {
  name: string;
  type: string;
  default: string;
  description: string;
}

export type DocGroup = "Components" | "Layout";

export interface Doc {
  id: string;
  group: DocGroup;
  name: string;
  blurb: string;
  examples: Example[];
  /**
   * Hand-curated API rows that can't be derived from skeletal JSDoc: inherited
   * Base UI props (e.g. `disabled`, `render`), merged part rows
   * (`Positioner.side / align`, `open / defaultOpen`), and overrides for
   * generated rows (matched by `name`) whose type is an unresolvable imported
   * alias. Skeletal-owned props are generated from JSDoc by
   * `pnpm run gen:docs` and merged in `docs/index.ts`.
   */
  props?: DocProps[];
}
