import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Olivia Shi's portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Olivia Shi — Designer<\/title>/i);
  assert.match(html, /Strategic design thinker with more than 10 years of experience/);
  assert.match(html, /Selected work/);
  assert.match(html, /href="\/work\/money-bible"/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
  assert.equal((html.match(/class="project-link"/g) ?? []).length, 24);
});

test("server-renders project detail pages", async () => {
  const response = await render("/work/money-bible");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Money Bible — Olivia Shi<\/title>/i);
  assert.match(html, /Project overview/);
  assert.match(html, /Full project/);
  assert.match(html, /Next project/);
});
