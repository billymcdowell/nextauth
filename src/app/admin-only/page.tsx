export default async function ExtraPage() {
  return (
    <section>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Admin only page
            </h2>
            <p className="text-muted-foreground">
              This page is only accessible by accounts with the role
              &quot;admin&quot;.
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
