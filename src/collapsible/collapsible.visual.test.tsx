import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Collapsible } from "@skeletal/collapsible";

test("states", async () => {
  const screen = await render(
    <div
      style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", inlineSize: "20rem" }}
      data-testid="states"
    >
      <Collapsible.Root>
        <Collapsible.Trigger>Closed</Collapsible.Trigger>
        <Collapsible.Panel>
          <div style={{ padding: "0.5rem 0.25rem" }}>Hidden content</div>
        </Collapsible.Panel>
      </Collapsible.Root>
      <Collapsible.Root defaultOpen>
        <Collapsible.Trigger>Open</Collapsible.Trigger>
        <Collapsible.Panel>
          <div style={{ padding: "0.5rem 0.25rem" }}>Visible content</div>
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>,
  );

  await expect.element(screen.getByTestId("states")).toMatchScreenshot("collapsible-states");
});

test("full-width", async () => {
  const screen = await render(
    <div
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem", inlineSize: "20rem" }}
      data-testid="full-width"
    >
      <Collapsible.Root defaultOpen>
        <Collapsible.Trigger fullWidth variant="ghost">
          Recovery keys
        </Collapsible.Trigger>
        <Collapsible.Panel>
          <div style={{ padding: "0.5rem 0.625rem" }}>alien-bean-pasta</div>
        </Collapsible.Panel>
      </Collapsible.Root>
      <Collapsible.Root>
        <Collapsible.Trigger fullWidth variant="ghost">
          Devices
        </Collapsible.Trigger>
        <Collapsible.Panel>
          <div style={{ padding: "0.5rem 0.625rem" }}>2 signed-in devices</div>
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>,
  );

  await expect.element(screen.getByTestId("full-width")).toMatchScreenshot("collapsible-full-width");
});
