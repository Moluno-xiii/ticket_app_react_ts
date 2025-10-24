import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-y-5 h-full w-full">
      <header className="flex flex-row justify-between items-center">
        <h2 className="text-xl md:text-2xl font-grotesk text-dark">Settings</h2>
      </header>
    </div>
  );
}
