export default async function Home() {
  return (
    <section>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Home page</h2>
            <p className="text-muted-foreground">
              This is the root page for the site
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
