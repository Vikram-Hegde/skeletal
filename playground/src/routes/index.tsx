import { ArrowUpRight } from "@phosphor-icons/react";
import { Grid, Icon, Stack } from "@elemental";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { Doc } from "@/docs";
import { DOC_GROUPS } from "@/docs";
import { PREVIEWS } from "@/docs/previews";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="docs-main home" id="docs-main" tabIndex={-1}>
      <Stack space="2.5rem">
        {DOC_GROUPS.map((group) => (
          <section className="home-group" key={group.label}>
            <h2 className="home-group__title">{group.label}</h2>
            <Grid min="18rem" gap="0" className="home-grid">
              {group.docs.map((doc) => (
                <ComponentCard key={doc.id} doc={doc} />
              ))}
            </Grid>
          </section>
        ))}
      </Stack>
    </main>
  );
}

function ComponentCard({ doc }: { doc: Doc }) {
  return (
    <Link
      to="/docs/$docId"
      params={{ docId: doc.id }}
      className="home-card"
      style={{ viewTransitionName: `comp-card-${doc.id}` }}
    >
      <div className="home-card__preview" inert>
        {PREVIEWS[doc.id] ?? doc.examples[0]?.demo}
      </div>
      <span className="home-card__name-row">
        <span className="home-card__name">{doc.name}</span>
        <Icon name={ArrowUpRight} size={15} className="home-card__arrow" />
      </span>
    </Link>
  );
}
