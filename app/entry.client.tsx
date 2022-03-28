import { useState } from "react";
import type { ReactNode } from "react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "remix";

import { ClientStyleContext } from "~/chakra/context";
import createEmotionCache from "~/chakra/createEmotionCache";

interface ClientCacheProviderProps {
  children: ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
