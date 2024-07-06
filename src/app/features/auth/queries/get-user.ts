import { getAuth } from "./get-auth";

export async function getName(): Promise<string | null> {
  try {
    const auth = await getAuth();
    if (auth.user) {
      return auth.user.firstName;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch current user email:", error);
    return null;
  }
}
