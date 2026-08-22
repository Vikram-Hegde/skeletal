import { ArrowLeft, ArrowRight, Check, Copy } from "@phosphor-icons/react";
import { Box, Button, Cluster, Container, Icon, Stack } from "@elemental";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { tokenize } from "rangi";
import { githubDark, githubLight } from "rangi/themes";
import { useEffect, useMemo, useState } from "react";
import type { Doc, Example } from "@/docs";
import { DOCS } from "@/docs";
import { ComponentNotFound } from "@/docs/not-found";
import type { ThemeMode } from "@/theme";
import { useTheme } from "@/theme";

export const Route = createFileRoute("/docs/$docId")({
  beforeLoad: ({ params }) => {
    if (!DOCS.some((doc) => doc.id === params.docId)) {
      throw notFound({ data: { docId: params.docId } });
    }
  },
  notFoundComponent: ComponentNotFound,
  component: DocPage,
});

function DocPage() {
  const { docId } = Route.useParams();
  const { effectiveTheme } = useTheme();

  const doc = DOCS.find((d) => d.id === docId) ?? DOCS[0];
  const docIndex = DOCS.findIndex((d) => d.id === doc.id);
  const prevDoc = DOCS[docIndex - 1];
  const nextDoc = DOCS[docIndex + 1];

  const sectionIds = useMemo(
    () => [...doc.examples.map((example) => slugify(example.title)), "api"],
    [doc],
  );

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setActiveSection("");

    const targets: Array<{ id: string; el: HTMLElement }> = [];
    for (const id of sectionIds) {
      const el = document.getElementById(`sec-${id}`);
      if (el) targets.push({ id, el });
    }
    if (targets.length === 0) return;

    const intersecting = new Set<string>();
    let atBottom = false;
    const updateActive = () => {
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? "");
        return;
      }
      let current: string | undefined;
      for (const { id } of targets) {
        if (intersecting.has(id)) current = id;
      }
      setActiveSection(current ?? targets[0]?.id ?? "");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id.replace(/^sec-/, "");
          if (entry.isIntersecting) intersecting.add(id);
          else intersecting.delete(id);
        }
        updateActive();
      },
      { rootMargin: "-120px 0px -75% 0px" },
    );
    for (const { el } of targets) observer.observe(el);

    const sentinel = document.getElementById("docs-end");
    const endObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          atBottom = entry.isIntersecting;
        }
        updateActive();
      },
      { rootMargin: "-90% 0px 0px 0px" },
    );
    if (sentinel) endObserver.observe(sentinel);

    return () => {
      observer.disconnect();
      endObserver.disconnect();
    };
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(`sec-${id}`)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <Cluster
      as="main"
      className="docs-main"
      justify="center"
      align="flex-start"
      space="2.5rem"
      id="docs-main"
      tabIndex={-1}
    >
      <Container
        as="article"
        className="docs-page"
        max="46rem"
        padding="0"
        style={{ marginInline: 0, viewTransitionName: `comp-card-${doc.id}` }}
      >
        <Stack space="2rem">
          <Stack space="0.25rem">
            <h1 className="docs-page__title">{doc.name}</h1>
            <p className="docs-page__blurb">{doc.blurb}</p>
          </Stack>

          <Stack space="1.5rem">
            {doc.examples.map((example) => (
              <ExampleBlock key={example.title} example={example} theme={effectiveTheme} />
            ))}
          </Stack>

          <section className="docs-section" id="sec-api">
            <h2 className="docs-section__title">API</h2>
            <div className="docs-table-scroll">
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {doc.props.map((prop) => (
                    <tr key={prop.name}>
                      <td>
                        <code>{prop.name}</code>
                      </td>
                      <td data-label="Type">
                        <code>
                          <HighlightedTokens code={prop.type} theme={effectiveTheme} />
                        </code>
                      </td>
                      <td data-label="Default">
                        <code>
                          <HighlightedTokens code={prop.default} theme={effectiveTheme} />
                        </code>
                      </td>
                      <td>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <DocPagination prev={prevDoc} next={nextDoc} />
          <div id="docs-end" aria-hidden="true" />
        </Stack>
      </Container>
      <aside className="docs-toc" aria-label="On this page">
        <Stack space="0.25rem">
          <p className="docs-toc__title">On this page</p>
          {doc.examples.map((example) => (
            <button
              key={example.title}
              type="button"
              className="docs-toc__link"
              data-active={activeSection === slugify(example.title)}
              onClick={() => scrollToSection(slugify(example.title))}
            >
              {example.title}
            </button>
          ))}
          <button
            type="button"
            className="docs-toc__link"
            data-active={activeSection === "api"}
            onClick={() => scrollToSection("api")}
          >
            API
          </button>
        </Stack>
      </aside>
    </Cluster>
  );
}

function DocPagination({ prev, next }: { prev: Doc | undefined; next: Doc | undefined }) {
  return (
    <nav className="docs-pagination" aria-label="Component navigation">
      {prev ? (
        <Link
          to="/docs/$docId"
          params={{ docId: prev.id }}
          className="docs-pagination__item"
          preload={false}
        >
          <span className="docs-pagination__label">
            <Icon name={ArrowLeft} size={13} />
            Previous
          </span>
          <span className="docs-pagination__name">{prev.name}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to="/docs/$docId"
          params={{ docId: next.id }}
          className="docs-pagination__item docs-pagination__item--next"
          preload={false}
        >
          <span className="docs-pagination__label">
            Next
            <Icon name={ArrowRight} size={13} />
          </span>
          <span className="docs-pagination__name">{next.name}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function ExampleBlock({ example, theme }: { example: Example; theme: ThemeMode }) {
  return (
    <Box
      as="section"
      className="docs-example"
      border="1px solid var(--docs-border)"
      background="var(--docs-panel)"
      padding="0"
      id={`sec-${slugify(example.title)}`}
    >
      <h2 className="docs-example__title">{example.title}</h2>
      <Box className="docs-demo" padding="1.25rem 1rem">
        {example.demo}
      </Box>
      {example.code ? <CodeBlock code={example.code} theme={theme} /> : null}
    </Box>
  );
}

function CodeBlock({ code, theme }: { code: string; theme: ThemeMode }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Box className="docs-code" background="var(--docs-code-bg)" padding="0">
      <HighlightedCode code={code} theme={theme} />
      <Button className="docs-copy" variant="ghost" size="sm" onClick={copy} aria-label="Copy code">
        <Icon name={copied ? Check : Copy} size={14} />
        {copied ? "Copied" : "Copy"}
      </Button>
    </Box>
  );
}

function HighlightedCode({ code, theme }: { code: string; theme: ThemeMode }) {
  return (
    <pre>
      <code>
        <HighlightedTokens code={code} lang="tsx" theme={theme} />
      </code>
    </pre>
  );
}

function HighlightedTokens({
  code,
  theme,
  lang = "ts",
}: {
  code: string;
  theme: ThemeMode;
  lang?: string;
}) {
  const palette = theme === "dark" ? githubDark : githubLight;
  const tokens = useMemo(() => tokenize(code, { lang }), [code, lang]);
  const spans = useMemo(() => {
    let offset = 0;
    return tokens.map((token) => {
      const start = offset;
      offset += token.text.length;
      const color = token.type ? palette.tokens[token.type] : undefined;
      return (
        <span key={start} style={color ? { color } : undefined}>
          {token.text}
        </span>
      );
    });
  }, [tokens, palette]);
  return <>{spans}</>;
}
