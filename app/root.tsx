import { ChakraProvider, Box } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import { useContext, useEffect } from "react";
import { json, LoaderFunction, MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import { getUser } from "~/utils/session.server";
import { ClientStyleContext, ServerStyleContext } from "./chakra/context";
import Error from "./components/Error";
import Root from "./components/Root";
import { primaryTheme } from "./theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <Document title="Remix Store | An online store made with Remix">
      <ChakraProvider theme={primaryTheme}>
        <Root />
      </ChakraProvider>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider theme={primaryTheme}>
        <Box>
          <Error title={`${caught.status}`} message={caught.statusText} />
        </Box>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider theme={primaryTheme}>
        <Error title="An error ocurred :(" message={error.message} />
      </ChakraProvider>
    </Document>
  );
}

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children, title = "" }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <title>{title}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstaticom" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);
