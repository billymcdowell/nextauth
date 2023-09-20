import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <section>
      <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Server page</h2>
            <p className="text-muted-foreground">
              This page is only rendered on the server.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
