// Polls the pinned Playwright container until its server actually answers.
// `docker compose up -d` returns once the container is *started*, not when
// `run-server` is listening (a cold `npx` boot takes seconds) — and a bare
// TCP probe is useless here because Docker's port proxy accepts connections
// before anything listens inside, so only a complete HTTP response proves
// readiness. Every visual-test entry point waits here first, local and CI
// alike; without it vitest fails with `socket hang up`.
import http from "node:http";

const host = "127.0.0.1";
const port = Number(process.env.PLAYWRIGHT_PORT ?? 6677);
const deadline = Date.now() + 180_000;

function ping() {
  return new Promise((resolve) => {
    const request = http.get({ host, port, path: "/", timeout: 2000 }, (response) => {
      // Any status (even 4xx for the unknown path) proves the server is up.
      response.resume();
      resolve(true);
    });
    request.once("timeout", () => {
      request.destroy();
      resolve(false);
    });
    request.once("error", () => resolve(false));
  });
}

for (;;) {
  if (await ping()) {
    break;
  }
  if (Date.now() > deadline) {
    console.error(`Timed out waiting for the Playwright server at ${host}:${port}`);
    process.exit(1);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
