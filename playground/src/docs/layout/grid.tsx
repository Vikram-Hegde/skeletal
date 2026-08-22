import { Grid } from "@elemental";
import { DemoCard } from "@/docs/helpers";
import type { Doc } from "@/docs/types";

export const gridDoc: Doc = {
  id: "grid",
  group: "Layout",
  name: "Grid",
  blurb: "An auto-filling grid with a minimum column width. No breakpoints needed.",
  examples: [
    {
      title: "Auto-filling columns",
      code: `<Grid min="10rem" gap="0.75rem">
  <article>Card</article>
  <article>Card</article>
  …
</Grid>`,
      demo: (
        <Grid min="10rem" gap="0.75rem">
          <DemoCard
            title="Accounts"
            text="Manage connected workspaces and permissions."
            footer="12 items"
          />
          <DemoCard
            title="Billing"
            text="Invoices, plans and payment methods."
            footer="Due Jul 1"
          />
          <DemoCard
            title="Members"
            text="Invite and manage your team's access."
            footer="8 members"
          />
          <DemoCard
            title="Usage"
            text="Requests, storage and compute this month."
            footer="42% used"
          />
          <DemoCard title="Logs" text="Stream and search runtime events." footer="Live" />
        </Grid>
      ),
    },
    {
      title: "Min drives column count",
      code: `<Grid min="18rem">
  <article>Wide cards — fewer columns</article>
</Grid>`,
      demo: (
        <Grid min="18rem" gap="1rem">
          <DemoCard
            title="Wide column"
            text="A larger minimum means fewer columns on the same width."
            footer="min=18rem"
          />
          <DemoCard title="Wide column" text="Cards fill the full row width." footer="min=18rem" />
        </Grid>
      ),
    },
    {
      title: "Nested grids",
      code: `<Grid min="16rem">
  <section>
    <Grid min="7rem">
      <div>Stat</div>
      …
    </Grid>
  </section>
  …
</Grid>`,
      demo: (
        <Grid min="16rem" gap="1rem">
          <Grid min="7rem" gap="0.5rem">
            <DemoCard title="1.2k" text="Requests" footer="Today" />
            <DemoCard title="99.9%" text="Uptime" footer="30d" />
            <DemoCard title="42ms" text="P95 latency" footer="Live" />
          </Grid>
          <DemoCard
            title="Activity"
            text="A nested grid reflows independently of its parent."
            footer="Details"
          />
          <DemoCard
            title="Deployments"
            text="The outer grid still owns the big rows."
            footer="View all"
          />
        </Grid>
      ),
    },
  ],
};
