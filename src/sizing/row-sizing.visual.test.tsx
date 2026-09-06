import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "@skeletal/button";
import { Input } from "@skeletal/input";
import { Select } from "@skeletal/select";

test("action row md", async () => {
  const screen = await render(
    <div
      style={{ display: "flex", gap: "0.5rem", padding: "1rem", alignItems: "center" }}
      data-testid="row-md"
    >
      <Button>Save changes</Button>
      <Input placeholder="Name" aria-label="Name" />
      <Select.Root defaultValue="us">
        <Select.Trigger>United States</Select.Trigger>
      </Select.Root>
    </div>,
  );

  await expect.element(screen.getByTestId("row-md")).toMatchScreenshot("row-md");
});

test("action row sm", async () => {
  const screen = await render(
    <div
      style={{ display: "flex", gap: "0.5rem", padding: "1rem", alignItems: "center" }}
      data-testid="row-sm"
    >
      <Button size="sm">Save changes</Button>
      <Input size="sm" placeholder="Name" aria-label="Name" />
      <Select.Root defaultValue="us">
        <Select.Trigger size="sm">United States</Select.Trigger>
      </Select.Root>
    </div>,
  );

  await expect.element(screen.getByTestId("row-sm")).toMatchScreenshot("row-sm");
});
