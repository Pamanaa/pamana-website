import Image from "next/image";
import { signOut } from "./features/auth/actions/sign-out";
import { getAuth } from "./features/auth/queries/get-auth";

export default async function Home() {
  const { user } = await getAuth();

  const checker = user ? (
    <>
      <h1 className="dongle-h3-regular">Currently Logged In</h1>
      <form action={signOut} className="dongle-h3-regular">
        <button type="submit">Sign Out CLICK ME</button>
      </form>
    </>
  ) : (
    <h1 className="dongle-h3-regular">
      Enter localhost:3000/sign-in to log in
    </h1>
  );

  return (
    <>
      <h1 className="dongle-header-active">TEST</h1>
      <h1 className="dongle-header-regular">localhost:3000/sign-up</h1>
      <h1 className="dongle-header-regular">localhost:3000/sign-in</h1>
      <h1 className="dongle-header-regular">- No validations yet</h1>

      {checker}
    </>
  );
}
