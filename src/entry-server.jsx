import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'node:stream';
import App from './App.jsx';

export function render(url) {
  const context = {};
  return new Promise((resolve, reject) => {
    let html = '';
    const output = new Writable({ write(chunk, _encoding, done) { html += chunk.toString(); done(); } });
    output.on('finish', () => resolve({ html, head: context.helmet }));
    output.on('error', reject);
    const stream = renderToPipeableStream(
      <HelmetProvider context={context}><StaticRouter location={url}><App /></StaticRouter></HelmetProvider>,
      { onAllReady() { stream.pipe(output); }, onShellError: reject, onError: reject },
    );
  });
}
