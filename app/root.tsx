import { ChakraProvider, Box } from "@chakra-ui/react";
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
    <Document>
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

function Document({
  children,
  title = "Remix Store | An online store made with Remix",
}: {
  children: React.ReactNode;
  title?: string;
}) {
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
