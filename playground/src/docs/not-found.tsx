import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { Cluster, Cover, Icon, Stack } from "@elemental";
import type { NotFoundRouteProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import type { Doc } from "@/docs";
import { DOCS, GROUP_LABELS } from "@/docs";
import { editDistance } from "@/lib/fuzzy";

export interface NotFoundData {
  docId?: string;
}

/**
 * 404 page. Rendered inside the docs layout both for an unknown `/docs/<id>`
 * (via the route's `notFoundComponent`) and for any other unmatched path (via
 * the root route), so the header + sidebar stay intact. Shows the requested
 * slug, the closest real components, and a way back home.
 */
export function ComponentNotFound({ data }: NotFoundRouteProps) {
  const docId = (data as NotFoundData | undefined)?.docId;
  const suggestions = docId ? closestDocs(docId, DOCS) : [];

  return (
    <Cover as="main" className="docs-main docs-404" minHeight="calc(100dvh - 3.25rem)" space="0">
      <Stack className="docs-404__inner" space="0.875rem" data-cover-center>
        <MissingBone className="docs-404__spine" />
        <h1 className="docs-404__status">404</h1>
        <p className="docs-404__title">This bone is missing from the skeleton.</p>
        <p className="docs-404__blurb">
          {docId ? (
            <>
              We don&apos;t ship a component at <code className="docs-404__slug">docs/{docId}</code>
              .
            </>
          ) : (
            <>The page you&apos;re looking for doesn&apos;t exist.</>
          )}
        </p>

        {suggestions.length > 0 ? (
          <Stack className="docs-404__suggestions" space="0.5rem">
            <span className="docs-404__suggestions-label">Did you mean?</span>
            <Cluster space="0.5rem" justify="center" align="stretch">
              {suggestions.map((doc) => (
                <Link
                  key={doc.id}
                  to="/docs/$docId"
                  params={{ docId: doc.id }}
                  className="docs-404__suggestion"
                >
                  <span>{doc.name}</span>
                  <span className="docs-404__suggestion-group">{GROUP_LABELS[doc.group]}</span>
                  <Icon name={ArrowRight} size={13} />
                </Link>
              ))}
            </Cluster>
          </Stack>
        ) : null}

        <Link to="/" className="docs-404__action">
          Browse all components
          <Icon name={ArrowUpRight} size={15} />
        </Link>
      </Stack>
    </Cover>
  );
}

const SPINE = [
  { cx: 52, missing: false },
  { cx: 128, missing: false },
  { cx: 204, missing: true },
  { cx: 280, missing: false },
  { cx: 356, missing: false },
];

/**
 * A row of vertebra glyphs — the brand mark's shape — with one bone missing.
 * The empty slot is dashed and holds a floating "?", so the missing piece is
 * the clear focal point.
 */
function MissingBone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 408 90" className={className} aria-hidden="true">
      {SPINE.map(({ cx, missing }) => {
        if (missing) {
          return (
            <g key={cx} className="docs-404__missing">
              <Vertebra cx={cx} outline />
              <text
                x={cx}
                y={46}
                textAnchor="middle"
                dominantBaseline="central"
                className="docs-404__question"
              >
                ?
              </text>
            </g>
          );
        }
        return <Vertebra key={cx} cx={cx} />;
      })}
    </svg>
  );
}

function Vertebra({ cx, outline = false }: { cx: number; outline?: boolean }) {
  const stroke = outline
    ? "var(--docs-border)"
    : "color-mix(in oklab, var(--docs-accent) 60%, transparent)";
  return (
    <g stroke={stroke} strokeWidth={2} fill={outline ? "none" : "var(--docs-accent-soft)"}>
      <rect
        x={cx - 20}
        y={42}
        width={40}
        height={6}
        rx={3}
        strokeDasharray={outline ? "4 4" : undefined}
      />
      <circle cx={cx - 20} cy={42} r={5} strokeDasharray={outline ? "4 4" : undefined} />
      <circle cx={cx - 20} cy={48} r={5} strokeDasharray={outline ? "4 4" : undefined} />
      <circle cx={cx + 20} cy={42} r={5} strokeDasharray={outline ? "4 4" : undefined} />
      <circle cx={cx + 20} cy={48} r={5} strokeDasharray={outline ? "4 4" : undefined} />
    </g>
  );
}

/** Rank docs by edit distance from the typed slug; keep the close ones only. */
function closestDocs(slug: string, docs: readonly Doc[]): Doc[] {
  const norm = slug.toLowerCase().replace(/[-_./\s]/g, "");
  const scored = docs
    .map((doc) => ({
      doc,
      dist: Math.min(
        editDistance(norm, doc.id.toLowerCase()),
        editDistance(norm, doc.name.toLowerCase().replace(/[\s.-]/g, "")),
      ),
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 4);
  return scored.some(({ dist }) => dist <= 3)
    ? scored.filter(({ dist }) => dist <= 4).map(({ doc }) => doc)
    : [];
}
