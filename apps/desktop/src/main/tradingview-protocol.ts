import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { net, protocol } from 'electron';

const DEFAULT_TV_PATH = '/Users/rude/Documents/Work/tradingview_charting_library';

function resolveTradingViewPath(): string {
  return process.env.TRADINGVIEW_LIB_PATH ?? DEFAULT_TV_PATH;
}

export function registerTradingViewProtocol(): void {
  const basePath = resolveTradingViewPath();

  protocol.handle('tv', async (request) => {
    const requestUrl = new URL(request.url);
    const relative = decodeURIComponent(requestUrl.pathname).replace(/^\//, '');
    const safePath = path.normalize(path.join(basePath, relative || 'index.html'));

    if (!safePath.startsWith(basePath)) {
      return new Response('Forbidden', { status: 403 });
    }

    if (!fs.existsSync(safePath)) {
      return new Response('Not Found', { status: 404 });
    }

    return net.fetch(pathToFileURL(safePath).toString());
  });
}
