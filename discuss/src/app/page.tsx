import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <form>
        <Button className="ms-2 me-2">Sign In</Button>
        <Button className="ms-2">Sign Out</Button>
      </form>
    </div>
  );
}
