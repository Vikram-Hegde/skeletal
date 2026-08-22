# Elemental

My design system.

## Development

- Install dependencies:

```bash
pnpm install
```

- Run the playground:

```bash
pnpm run play
```

- Run the unit tests:

```bash
pnpm run test
```

- Build the library:

```bash
pnpm run build
```

## Package

- Name: `@vikram-hegde/elemental`
- Internal alias: `@elemental` → `src/*` (tsconfig, tsdown, vite)
- Consumers: `import { Button } from "@vikram-hegde/elemental"` + `import "@vikram-hegde/elemental/index.css"`
