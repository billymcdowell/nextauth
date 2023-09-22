"use client";
// Remember you must use an AuthProvider for
// client components to useSession
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin?callbackUrl=/client");
    },
  });

  // if (session?.user.role !== "admin"
  //     && session?.user.role !== "manager") {
  //     return <h1 className="text-5xl">Access Denied</h1>
  // }

  if (!session?.user) return;

  return (
    <section>
      <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Client page</h2>
            <p className="text-muted-foreground">
              This page is only rendered on the client.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div></div>
          </div>
        </div>
      </div>
      {/* <UserCard user={session?.user} pagetype={"Client"} /> */}
    </section>
  );
}
