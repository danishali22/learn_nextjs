import { signIn } from "@/actions/sign-in";
import { signOut } from "@/actions/sign-out";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1>Home</h1>
      <form action={signIn}>
        <Button type="submit" className="ms-2 me-2">
          Sign In
        </Button>
      </form>
      <form action={signOut}>
        <Button type="submit" className="ms-2">
          Sign Out
        </Button>
      </form>
      {session?.user && <div>{JSON.stringify(session.user)}</div>}
    </div>
  );
}
