import { json } from "remix";
import type { ActionFunction } from "remix";

import { createUserSession } from "~/utils/session.server";
import { createUser, getUserByEmail, verifyLogin } from "~/models/user.server";
import { validateEmail } from "~/helpers";

export interface ActionData {
  formError?: string;
  errors?: {
    name?: string;
    email?: string;
    password?: string;
    terms?: string;
  };
}

export const loginAction: ActionFunction = async ({ request }) => {
  const errors: ActionData["errors"] = {};

  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    errors["email"] = "Email is invalid";
  }

  if (typeof password !== "string" || password.length === 0) {
    errors["password"] = "Password is required";
  } else if (password.length < 8) {
    errors["password"] = "Password is too short";
  }

  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 });
  }

  const user = await verifyLogin(email as string, password as string);

  if (!user) {
    return json<ActionData>(
      { formError: "Invalid email or password" },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/",
  });
};

export const registerAction: ActionFunction = async ({ request }) => {
  const errors: ActionData["errors"] = {};

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const terms = formData.get("terms");
  const redirectTo = formData.get("redirectTo");

  if (!validateEmail(email)) {
    errors["email"] = "Email is invalid";
  }

  if (typeof name !== "string" || name.length === 0) {
    errors["name"] = "Name is required";
  }

  if (typeof password !== "string" || password.length === 0) {
    errors["password"] = "Password is required";
  } else if (password.length < 8) {
    errors["password"] = "Password is too short";
  }

  if (typeof terms !== "string") {
    errors["terms"] = "You must accept our terms of service";
  }

  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 });
  }

  const existingUser = await getUserByEmail(email as string);
  if (existingUser) {
    return json<ActionData>(
      { formError: "A user already exists with this email" },
      { status: 400 }
    );
  }

  const user = await createUser(
    name as string,
    email as string,
    password as string
  );

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/",
  });
};
