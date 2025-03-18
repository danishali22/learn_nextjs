import { Button, buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link
          href={"/snippet/new"}
          className={buttonVariants({ variant: "default" })}
        >
          New
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div className="my-5 flex items-center justify-between bg-gray-200 p-2 rounded-md">
          <h1>{snippet.title}</h1>
          <Link href={`snippet/${snippet.id}`}>
            <Button className="cursor-pointer" variant={"link"}>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
