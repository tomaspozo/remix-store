import { json, redirect } from "remix";
import type { LoaderFunction } from "remix";

import { getUserId } from "~/utils/session.server";

export const loginLoader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};
