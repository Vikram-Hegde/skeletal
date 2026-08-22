import { Box, Button, Cluster, Skeleton, Stack } from "@elemental";
import type { CSSProperties } from "react";
import { useState } from "react";
import type { Doc } from "@/docs/types";

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='140'/%3E";

const coverImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='140'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%237c3aed'/%3E%3Cstop offset='1' stop-color='%234f46e5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='640' height='140' fill='url(%23g)'/%3E%3C/svg%3E";

const avatarImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Ccircle cx='22' cy='22' r='22' fill='%236366f1'/%3E%3C/svg%3E";

export const skeletonDoc: Doc = {
  id: "skeleton",
  group: "Components",
  name: "Skeleton",
  blurb:
    "Wrap a real component and its text, images, and form controls become a layout-aware shimmer — no manual rectangle sizing.",
  examples: [
    {
      title: "Any component",
      code: `<Skeleton loading={isLoading}>
  <img src="/cover.png" width="640" height="140" alt="" />

  <Cluster space="0.75rem" align="center">
    <img src="/avatar.png" width="44" height="44" alt="" />
    <Stack space="0.25rem">
      <h3>Vikram Hegde</h3>
      <p>Engineer · Frontend</p>
    </Stack>
  </Cluster>

  <p>Text becomes per-line bars, images become blocks…</p>

  <button>Follow</button>
  <button>Message</button>
</Skeleton>`,
      demo: <SkeletonPostDemo />,
    },
    {
      title: "Text",
      code: `<Skeleton>
  <Stack space="1rem">
    <h3>Post title</h3>
    <p>Long paragraph that wraps over several lines so every line gets its own shimmer band, matching the exact font size and wrapping of the real content.</p>
  </Stack>
</Skeleton>`,
      demo: (
        <Skeleton>
          <Stack space="1rem">
            <p className="docs-card__title">Post title</p>
            <p className="docs-card__text">
              Long paragraph that wraps over several lines so every line gets its own shimmer band,
              matching the exact font size, weight, and wrapping of the real content.
            </p>
            <p className="docs-card__text">
              A second, shorter paragraph to show mixed line lengths.
            </p>
          </Stack>
        </Skeleton>
      ),
    },
    {
      title: "Media",
      code: `<Skeleton>
  <Stack space="0.75rem">
    <img src="/banner.png" width="320" height="140" alt="" />
    <p>Caption text below the image.</p>
  </Stack>
</Skeleton>`,
      demo: (
        <Skeleton>
          <Stack space="0.75rem">
            <img src={placeholderImage} width="320" height="140" alt="" />
            <p className="docs-card__text">Caption text below the image.</p>
          </Stack>
        </Skeleton>
      ),
    },
    {
      title: "Controls",
      code: `<Skeleton>
  <Stack space="0.75rem">
    <label htmlFor="name">Display name</label>
    <input id="name" type="text" defaultValue="Vikram Hegde" />
    <textarea rows="3" defaultValue="A longer bio…" />
  </Stack>
</Skeleton>`,
      demo: (
        <Skeleton>
          <Stack space="0.75rem">
            <label className="docs-card__text" htmlFor="skeleton-name">
              Display name
            </label>
            <input
              id="skeleton-name"
              type="text"
              defaultValue="Vikram Hegde"
              style={{
                padding: "0.5rem 0.75rem",
                border: "1px solid var(--docs-border)",
                borderRadius: "var(--sk-radius)",
              }}
            />
            <textarea
              rows={3}
              defaultValue="A longer piece of bio text that wraps inside the field."
              style={{
                padding: "0.5rem 0.75rem",
                border: "1px solid var(--docs-border)",
                borderRadius: "var(--sk-radius)",
              }}
            />
          </Stack>
        </Skeleton>
      ),
    },
  ],
  props: [
    {
      name: "loading",
      type: "boolean",
      default: "true",
      description:
        "Show the shimmer instead of the real content. Toggle it once data arrives — the layout never jumps.",
    },
    {
      name: "aria-hidden",
      type: "boolean",
      default: "true",
      description:
        'The shimmer is decorative, so it is hidden from screen readers while loading. Announce the loading state from a live region around the skeleton instead (e.g. `<div role="status">Loading…</div>`).',
    },
  ],
};

/** A real post card that toggles into its own skeleton via `loading`. */
function SkeletonPostDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <Stack space="1rem">
      <Cluster space="0.75rem" align="center" justify="flex-start">
        <Button
          size="sm"
          variant={loading ? "primary" : "outline"}
          onClick={() => setLoading((value) => !value)}
        >
          {loading ? "Show loaded content" : "Show skeleton"}
        </Button>
        <p className="docs-skel-note">Same component — flip between real and loading.</p>
      </Cluster>

      <Skeleton loading={loading}>
        <Box
          border="1px solid var(--docs-border)"
          background="var(--docs-panel)"
          padding="1rem"
          style={{ borderRadius: "var(--sk-radius)" }}
        >
          <Stack space="0.875rem">
            <img
              src={coverImage}
              width="640"
              height="140"
              alt=""
              style={{ borderRadius: "var(--sk-radius)", display: "block" }}
            />

            <Cluster
              space="0.75rem"
              align="center"
              justify="flex-start"
              style={{ "--skeleton-radius": "999px" } as CSSProperties}
            >
              <img
                src={avatarImage}
                width="44"
                height="44"
                alt=""
                style={{ borderRadius: "999px" }}
              />
              <Stack space="0.25rem">
                <p className="docs-skel-title">Vikram Hegde</p>
                <p className="docs-skel-meta">Engineer · Frontend</p>
              </Stack>
            </Cluster>

            <p className="docs-skel-body">
              A design system skeleton that preserves the exact layout of any component while data
              loads — text becomes per-line bars that match every wrapped line, images become blocks
              sized to their element, and nothing needs manual rectangle math.
            </p>

            <Cluster space="0.5rem" justify="flex-start">
              <span className="docs-tag">Design systems</span>
              <span className="docs-tag">React</span>
              <span className="docs-tag">CSS</span>
            </Cluster>

            <Cluster space="0.5rem" justify="flex-start">
              <button type="button" className="docs-skel-action">
                Follow
              </button>
              <button type="button" className="docs-skel-action docs-skel-action--outline">
                Message
              </button>
            </Cluster>
          </Stack>
        </Box>
      </Skeleton>
    </Stack>
  );
}
