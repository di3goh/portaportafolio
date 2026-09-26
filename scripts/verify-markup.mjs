import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/app/App.tsx');
  const html = renderToStaticMarkup(createElement(App));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'The page must not contain duplicate IDs.');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'The page needs one primary heading.');
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(target), `Missing internal link target: ${target}`);
  }
  for (const [image] of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image, /\balt="[^"]*"/, 'Every image needs descriptive or decorative alternative text.');
  }
  for (const [button] of html.matchAll(/<button\b[^>]*>/g)) {
    assert.match(button, /type="button"/, 'Buttons must explicitly declare their type.');
  }
  assert.doesNotMatch(html, /tu-usuario|tu-perfil|cv-diego-mendez\.pdf/);
  console.log('React server render: OK');
  console.log('Heading hierarchy entry, unique IDs, anchor targets, image alternatives and button types: OK');
  console.log(`Internal targets verified: ${ids.join(', ')}`);
} finally {
  await server.close();
}
