import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "@skeletal/button";

test("variants", async () => {
  const screen = await render(
    <div style={{ display: "flex", gap: "0.5rem", padding: "1rem" }} data-testid="variants">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>,
  );

  await expect.element(screen.getByTestId("variants")).toMatchScreenshot("button-variants");
});
