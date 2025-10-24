import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/overview")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>Name</div>
      <Link to="/tickets">Ticekets</Link>
    </div>
  );
}
